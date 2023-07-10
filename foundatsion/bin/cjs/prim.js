"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prim = void 0;
const text_1 = require("./text");
const error_1 = require("./error");
function prim(v) {
    const name = text_1.text.show(v);
    return {
        name,
        is(u) {
            return v === u;
        },
        assert(u) {
            if (v !== u) {
                throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but the value did not match.\n`, `Instead, received ${text_1.text.show(u)}.`);
            }
        },
    };
}
exports.prim = prim;
