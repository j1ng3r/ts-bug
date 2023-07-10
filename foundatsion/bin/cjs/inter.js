"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inter = void 0;
const unsound_1 = require("./unsound");
const unknown_1 = require("./unknown");
const error_1 = require("./error");
function inter(...rs) {
    if (rs.length === 0) {
        return unsound_1.unsound.shut_up(unknown_1.unknown);
    }
    if (rs.length === 1) {
        return unsound_1.unsound.shut_up(rs[0]);
    }
    return {
        name: `(${rs.map(r => r.name).join(" & ")})`,
        is(u) {
            return rs.every(r => r.is(u));
        },
        assert(u) {
            try {
                for (const r of rs) {
                    r.assert(u);
                }
            }
            catch (e) {
                if (e instanceof Error) {
                    throw new error_1.FoundatsionError(`While asserting for ${this.name}, an error was thrown:`, e, "The value must satisfy the following:\n", ...rs.map(r => `- ${r.name}\n`));
                }
                else {
                    throw e;
                }
            }
        },
    };
}
exports.inter = inter;
