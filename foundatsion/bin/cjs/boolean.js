"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boolean = void 0;
const rtti_1 = require("./rtti");
const error_1 = require("./error");
var boolean;
(function (boolean) {
    boolean.name = "boolean";
    function is(u) {
        return typeof u === "boolean";
    }
    boolean.is = is;
    function assert(u) {
        if (typeof u !== "boolean") {
            throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" when it should've been "boolean".`);
        }
    }
    boolean.assert = assert;
})(boolean = exports.boolean || (exports.boolean = {}));
rtti_1.rtti.verify(boolean);
