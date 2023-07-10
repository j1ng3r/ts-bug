"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ubigint = void 0;
const rtti_1 = require("./rtti");
const inter_1 = require("./inter");
const bigint_1 = require("./bigint");
const unsound_1 = require("./unsound");
const unsigned_1 = require("./unsigned");
const error_1 = require("./error");
exports.ubigint = {
    ...(0, inter_1.inter)(unsigned_1.unsigned, bigint_1.bigint),
    name: "ubigint",
    cast_from(u) {
        const b = bigint_1.bigint.cast_from(u);
        unsigned_1.unsigned.assert(b);
        return b;
    },
    cast_from_string(s) {
        try {
            var b = BigInt(s);
        }
        catch (e) {
            throw new error_1.FoundatsionError(`Tried casting string to ${this.name} but failed since the BigInt`, "constructor threw an Error!", unsound_1.unsound.cast(e));
        }
        try {
            unsigned_1.unsigned.assert_from_bigint(b);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new error_1.FoundatsionError(`Tried casting string to ${this.name} but failed!`, e);
            }
            else {
                throw e;
            }
        }
        return b;
    },
};
rtti_1.rtti.verify(exports.ubigint);
