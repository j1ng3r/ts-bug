"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbol = void 0;
const rtti_1 = require("./rtti");
const error_1 = require("./error");
var symbol;
(function (symbol) {
    symbol.name = "symbol";
    function is(u) {
        return typeof u === "symbol";
    }
    symbol.is = is;
    function assert(u) {
        if (typeof u !== "symbol") {
            throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" when it should've been "symbol".`);
        }
    }
    symbol.assert = assert;
    symbol.cast_from_string = Symbol.for.bind(Symbol);
})(symbol = exports.symbol || (exports.symbol = {}));
rtti_1.rtti.verify(symbol);
