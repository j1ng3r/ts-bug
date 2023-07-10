"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ureal = void 0;
const real_1 = require("./real");
const rtti_1 = require("./rtti");
const inter_1 = require("./inter");
const unsigned_1 = require("./unsigned");
const error_1 = require("./error");
exports.ureal = {
    ...(0, inter_1.inter)(unsigned_1.unsigned, real_1.real),
    name: "ureal",
    cast_from_string(s) {
        try {
            const r = real_1.real.cast_from_string(s);
            unsigned_1.unsigned.assert_from_number(r);
            return r;
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
rtti_1.rtti.verify(exports.ureal);
