import { text } from "./text";
import { FoundatsionError } from "./error";
export function prim(v) {
    const name = text.show(v);
    return {
        name,
        is(u) {
            return v === u;
        },
        assert(u) {
            if (v !== u) {
                throw new FoundatsionError(`Tried asserting for ${this.name} but the value did not match.\n`, `Instead, received ${text.show(u)}.`);
            }
        },
    };
}
