import { unsound } from "./unsound";
import { __unreachable } from "./type_traits";
import { FoundatsionError } from "./error";
export function tuple(...rs) {
    const name = `[${rs.map(r => r.name).join(", ")}]`;
    return {
        name,
        is(u) {
            if (!Array.isArray(u)) {
                return false;
            }
            unsound.assert(u);
            if (u.length !== rs.length) {
                return false;
            }
            for (let i = 0; i < rs.length; i++) {
                const r = rs[i];
                if (r === undefined) {
                    __unreachable();
                }
                if (!r.is(u[i])) {
                    return false;
                }
            }
            return true;
        },
        assert(u) {
            if (!Array.isArray(u)) {
                throw new FoundatsionError(`Since ${this.name} extends array<unknown>, tried asserting for`, "array<unknown> but failed since Array.isArray returned false.");
            }
            unsound.assert(u);
            if (u.length !== rs.length) {
                throw new FoundatsionError(`Tried asserting for ${this.name} but the lengths were`, "different.\n", `Wanted:   {length: ${rs.length}}\n`, `Received: {length: ${u.length}}\n`);
            }
            for (let i = 0; i < rs.length; i++) {
                const maybe_r = rs[i];
                if (maybe_r === undefined) {
                    __unreachable();
                }
                // picky typescript
                const r = maybe_r;
                try {
                    r.assert(u[i]);
                }
                catch (e) {
                    if (e instanceof Error) {
                        throw new FoundatsionError(`While asserting for ${this.name}, an error was`, `thrown at index ${i}:`, e);
                    }
                    else {
                        throw e;
                    }
                }
            }
        },
    };
}
