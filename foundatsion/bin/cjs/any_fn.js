"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.any_fn = void 0;
const error_1 = require("./error");
var any_fn;
(function (any_fn) {
    any_fn.name = "any function";
    function is(u) {
        return typeof u === "function";
    }
    any_fn.is = is;
    function assert(u) {
        if (typeof u !== "function") {
            throw new error_1.FoundatsionError("Tried asserting for function but failed.\n", `typeof value was "${typeof u}" when it should've been "function".`);
        }
    }
    any_fn.assert = assert;
})(any_fn = exports.any_fn || (exports.any_fn = {}));
