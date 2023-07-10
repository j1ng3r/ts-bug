"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f_enum = void 0;
const prim_1 = require("./prim");
const text_1 = require("./text");
const never_1 = require("./never");
const error_1 = require("./error");
function f_enum(name, prims) {
    if (prims.length === 0) {
        return never_1.never;
    }
    if (prims.length === 1) {
        return { ...(0, prim_1.prim)(prims[0]), name };
    }
    return {
        name,
        is(u) {
            return prims.some(p => p === u);
        },
        assert(u) {
            if (this.is(u)) {
                return;
            }
            else {
                throw new error_1.FoundatsionError(`Could not assert that ${text_1.text.show(u)} was enum ${this.name}!\n`, "The value must be one of the following:\n", ...prims.map(p => `- ${text_1.text.show(p)}\n`));
            }
        },
    };
}
exports.f_enum = f_enum;
