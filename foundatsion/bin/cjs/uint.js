"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uint = void 0;
const error_1 = require("./error");
const int_1 = require("./int");
const inter_1 = require("./inter");
const rtti_1 = require("./rtti");
const unsigned_1 = require("./unsigned");
const unsound_1 = require("./unsound");
exports.uint = {
    ...(0, inter_1.inter)(unsigned_1.unsigned, int_1.int),
    name: "uint",
    cast_from_ubigint(u) {
        return unsound_1.unsound.bless(int_1.int.cast_from_bigint(u));
    },
    cast_from_string(s) {
        try {
            const i = int_1.int.cast_from_string(s);
            unsigned_1.unsigned.assert(i);
            return i;
        }
        catch (e) {
            if (e instanceof Error) {
                throw new error_1.FoundatsionError(`Tried casting string to ${this.name} but failed!`, e);
            }
            else {
                throw e;
            }
        }
    },
};
rtti_1.rtti.verify(exports.uint);
