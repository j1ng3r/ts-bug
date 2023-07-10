import { rtti } from "./rtti";
import { inter } from "./inter";
import { bigint } from "./bigint";
import { unsound } from "./unsound";
import { unsigned } from "./unsigned";
import { FoundatsionError } from "./error";
export const ubigint = {
    ...inter(unsigned, bigint),
    name: "ubigint",
    cast_from(u) {
        const b = bigint.cast_from(u);
        unsigned.assert(b);
        return b;
    },
    cast_from_string(s) {
        try {
            var b = BigInt(s);
        }
        catch (e) {
            throw new FoundatsionError(`Tried casting string to ${this.name} but failed since the BigInt`, "constructor threw an Error!", unsound.cast(e));
        }
        try {
            unsigned.assert_from_bigint(b);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new FoundatsionError(`Tried casting string to ${this.name} but failed!`, e);
            }
            else {
                throw e;
            }
        }
        return b;
    },
};
rtti.verify(ubigint);
