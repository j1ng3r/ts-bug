"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
const rtti_1 = require("./rtti");
const error_1 = require("./error");
var number;
(function (number) {
    number.name = "number";
    function is(u) {
        return typeof u === "number";
    }
    number.is = is;
    function assert(u) {
        if (typeof u !== "number") {
            throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" but should've been "number".`);
        }
    }
    number.assert = assert;
    number.cast_from = Number;
    number.cast_from_string = Number;
    number.cast_from_bigint = Number;
})(number = exports.number || (exports.number = {}));
rtti_1.rtti.verify(number);
