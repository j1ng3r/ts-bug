import { FoundatsionError } from "./error";
export var string;
(function (string) {
    string.name = "string";
    function is(u) {
        return typeof u === "string";
    }
    string.is = is;
    function assert(u) {
        if (typeof u !== "string") {
            throw new FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" but should've been "string".`);
        }
    }
    string.assert = assert;
    string.cast_from = String;
    string.cast_from_bigint = String;
    string.cast_from_number = String;
})(string || (string = {}));
