import { rtti } from "./rtti";
import { FoundatsionError } from "./error";
export var number;
(function (number) {
    number.name = "number";
    function is(u) {
        return typeof u === "number";
    }
    number.is = is;
    function assert(u) {
        if (typeof u !== "number") {
            throw new FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" but should've been "number".`);
        }
    }
    number.assert = assert;
    number.cast_from = Number;
    number.cast_from_string = Number;
    number.cast_from_bigint = Number;
})(number || (number = {}));
rtti.verify(number);
