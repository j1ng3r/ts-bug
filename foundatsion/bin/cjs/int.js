"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.int = void 0;
const rtti_1 = require("./rtti");
const text_1 = require("./text");
const unsound_1 = require("./unsound");
const error_1 = require("./error");
var int;
(function (int) {
    int.name = "int";
    function is(u) {
        return Number.isInteger(u);
    }
    int.is = is;
    function assert(u) {
        if (is(u))
            return;
        else
            throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but failed Number.isInteger(${text_1.text.show(u)})`, "returned false.");
    }
    int.assert = assert;
    function cast_from_string(s) {
        const i = Number(s);
        if (Number.isInteger(i))
            return i;
        else
            throw new error_1.FoundatsionError(`Could not cast string to ${this.name} because Number.isInteger(${text_1.text.show(i)})`, "returned false.");
    }
    int.cast_from_string = cast_from_string;
    function cast_from_bigint(b) {
        const n = Number(b);
        if (`${b}` !== `${n}`) {
            throw new error_1.FoundatsionError(`Loss of precision when converting from bigint to ${this.name}!\n`, `${b} !== ${n}`);
        }
        return unsound_1.unsound.cast(n);
    }
    int.cast_from_bigint = cast_from_bigint;
})(int = exports.int || (exports.int = {}));
rtti_1.rtti.verify(int);
