import { unsound } from "./unsound";
import { FoundatsionError } from "./error";
import { oo } from "./_all";
const cache = new WeakMap();
export function array(r) {
    if (cache.has(r)) {
        return unsound.shut_up(cache.get(r));
    }
    const new_rtti = {
        name: `array<${r.name}>`,
        is(u) {
            return true
                && Array.isArray(u)
                && u.every(elem => r.is(elem));
        },
        assert(u) {
            if (!Array.isArray(u)) {
                throw new FoundatsionError(`Tried asserting for ${this.name} but failed since`, "Array.isArray returned false.");
            }
            unsound.assert(u);
            for (let i = 0; i < u.length; i++) {
                try {
                    const elem = u[i];
                    unsound.fuck_off(r.assert)(elem);
                }
                catch (e) {
                    if (e instanceof Error) {
                        throw new FoundatsionError(`While asserting that value was ${this.name}, an Error was`, `thrown at index ${i}:`, e);
                    }
                    else {
                        throw e;
                    }
                }
            }
        },
    };
    oo.freeze(new_rtti);
    cache.set(r, new_rtti);
    return new_rtti;
}
