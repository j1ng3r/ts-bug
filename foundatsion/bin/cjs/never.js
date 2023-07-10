"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.never = void 0;
const rtti_1 = require("./rtti");
const error_1 = require("./error");
var never;
(function (never) {
    never.name = "never";
    function is(_) {
        return false;
    }
    never.is = is;
    function assert(_) {
        throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but that's absurd!`);
    }
    never.assert = assert;
})(never = exports.never || (exports.never = {}));
rtti_1.rtti.verify(never);
