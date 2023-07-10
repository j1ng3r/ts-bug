"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigint = void 0;
const rtti_1 = require("./rtti");
const error_1 = require("./error");
const unsound_1 = require("./unsound");
var bigint;
(function (bigint) {
    bigint.name = "bigint";
    function is(u) {
        return typeof u === "bigint";
    }
    bigint.is = is;
    function assert(u) {
        if (typeof u !== "bigint") {
            throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" when it should've been "bigint".`);
        }
    }
    bigint.assert = assert;
    bigint.cast_from = unsound_1.unsound.shut_up(BigInt);
    bigint.cast_from_number = BigInt;
    bigint.cast_from_string = BigInt;
})(bigint = exports.bigint || (exports.bigint = {}));
rtti_1.rtti.verify(bigint);
