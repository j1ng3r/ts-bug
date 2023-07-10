"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.real = void 0;
const text_1 = require("./text");
const rtti_1 = require("./rtti");
const number_1 = require("./number");
const unsound_1 = require("./unsound");
const error_1 = require("./error");
var real;
(function (real) {
    real.name = "real";
    function is(u) {
        return number_1.number.is(u) && (!Number.isNaN(u)) && Number.isFinite(u);
    }
    real.is = is;
    function assert(u) {
        try {
            number_1.number.assert(u);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but failed asserting for number:`, e);
            }
            else {
                throw e;
            }
        }
        if (Number.isNaN(u)) {
            throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but failed because the value was NaN.`);
        }
        if (!Number.isFinite(u)) {
            throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but ${text_1.text.show(u)} is not finite.`);
        }
    }
    real.assert = assert;
    function cast_from_string(s) {
        try {
            var n = Number(s);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new error_1.FoundatsionError(`Could not cast string to ${this.name} because the Number`, "constructor threw an error:", e);
            }
            else {
                throw e;
            }
        }
        if (Number.isNaN(n)) {
            throw new error_1.FoundatsionError(`Could not cast string to ${this.name} because ${text_1.text.show(s)}`, "was parsed as NaN!");
        }
        if (!Number.isFinite(n)) {
            throw new error_1.FoundatsionError(`Could not cast string (${text_1.text.show(s)}) to ${this.name} because`, `${text_1.text.show(n)} was not finite!`);
        }
        return unsound_1.unsound.bless(n);
    }
    real.cast_from_string = cast_from_string;
})(real = exports.real || (exports.real = {}));
rtti_1.rtti.verify(real);
