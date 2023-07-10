import { FoundatsionError } from "./error";
export var any_fn;
(function (any_fn) {
    any_fn.name = "any function";
    function is(u) {
        return typeof u === "function";
    }
    any_fn.is = is;
    function assert(u) {
        if (typeof u !== "function") {
            throw new FoundatsionError("Tried asserting for function but failed.\n", `typeof value was "${typeof u}" when it should've been "function".`);
        }
    }
    any_fn.assert = assert;
})(any_fn || (any_fn = {}));
