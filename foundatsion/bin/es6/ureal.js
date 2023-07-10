import { real } from "./real";
import { rtti } from "./rtti";
import { inter } from "./inter";
import { unsigned } from "./unsigned";
import { FoundatsionError } from "./error";
export const ureal = {
    ...inter(unsigned, real),
    name: "ureal",
    cast_from_string(s) {
        try {
            const r = real.cast_from_string(s);
            unsigned.assert_from_number(r);
            return r;
        }
        catch (e) {
            if (e instanceof Error) {
                throw new FoundatsionError(`Tried casting string to ${this.name} but failed!`, e);
            }
            else {
                throw e;
            }
        }
    },
};
rtti.verify(ureal);
