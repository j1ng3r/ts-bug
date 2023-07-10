"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = void 0;
const unsound_1 = require("./unsound");
const error_1 = require("./error");
const _all_1 = require("./_all");
const cache = new WeakMap();
function array(r) {
    if (cache.has(r)) {
        return unsound_1.unsound.shut_up(cache.get(r));
    }
    const new_rtti = {
        name: `array<${r.name}>`,
        is(u) {
            return true
                && Array.isArray(u)
                && u.every(elem => r.is(elem));
        },
        assert(u) {
            if (!Array.isArray(u)) {
                throw new error_1.FoundatsionError(`Tried asserting for ${this.name} but failed since`, "Array.isArray returned false.");
            }
            unsound_1.unsound.assert(u);
            for (let i = 0; i < u.length; i++) {
                try {
                    const elem = u[i];
                    unsound_1.unsound.fuck_off(r.assert)(elem);
                }
                catch (e) {
                    if (e instanceof Error) {
                        throw new error_1.FoundatsionError(`While asserting that value was ${this.name}, an Error was`, `thrown at index ${i}:`, e);
                    }
                    else {
                        throw e;
                    }
                }
            }
        },
    };
    _all_1.oo.freeze(new_rtti);
    cache.set(r, new_rtti);
    return new_rtti;
}
exports.array = array;
