import { rtti } from "./rtti";
import { FoundatsionError } from "./error";
import { unsound } from "./unsound";
export var bigint;
(function (bigint) {
    bigint.name = "bigint";
    function is(u) {
        return typeof u === "bigint";
    }
    bigint.is = is;
    function assert(u) {
        if (typeof u !== "bigint") {
            throw new FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" when it should've been "bigint".`);
        }
    }
    bigint.assert = assert;
    bigint.cast_from = unsound.shut_up(BigInt);
    bigint.cast_from_number = BigInt;
    bigint.cast_from_string = BigInt;
})(bigint || (bigint = {}));
rtti.verify(bigint);
