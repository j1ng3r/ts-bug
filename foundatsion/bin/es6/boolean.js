import { rtti } from "./rtti";
import { FoundatsionError } from "./error";
export var boolean;
(function (boolean) {
    boolean.name = "boolean";
    function is(u) {
        return typeof u === "boolean";
    }
    boolean.is = is;
    function assert(u) {
        if (typeof u !== "boolean") {
            throw new FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" when it should've been "boolean".`);
        }
    }
    boolean.assert = assert;
})(boolean || (boolean = {}));
rtti.verify(boolean);
