import { prim } from "./prim";
import { text } from "./text";
import { never } from "./never";
import { FoundatsionError } from "./error";
export function f_enum(name, prims) {
    if (prims.length === 0) {
        return never;
    }
    if (prims.length === 1) {
        return { ...prim(prims[0]), name };
    }
    return {
        name,
        is(u) {
            return prims.some(p => p === u);
        },
        assert(u) {
            if (this.is(u)) {
                return;
            }
            else {
                throw new FoundatsionError(`Could not assert that ${text.show(u)} was enum ${this.name}!\n`, "The value must be one of the following:\n", ...prims.map(p => `- ${text.show(p)}\n`));
            }
        },
    };
}
