"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auto = void 0;
const oo_1 = require("./oo");
const rtti_1 = require("./rtti");
const unsound_1 = require("./unsound");
const error_1 = require("./error");
function auto(t) {
    if (rtti_1.rtti.meta.is(t)) {
        return unsound_1.unsound.shut_up(t);
    }
    return {
        name: "anonymous record",
        is(u_toplevel) {
            let pairs = [{ t: t, u: u_toplevel }];
            // depth first type predicate-ing
            while (pairs.length > 0) {
                const current = pairs[0];
                // pop head
                [, ...pairs] = pairs;
                // can't be undefined if the length > 0
                unsound_1.unsound.assert_not_undefined(current);
                const current_t = current.t;
                const current_u = current.u;
                if (rtti_1.rtti.meta.is(current_t)) {
                    if (!current_t.is(current_u)) {
                        return false; // <----------------------------------- sad path
                    }
                    continue;
                }
                else {
                    // we're dealing with a record
                    if (!oo_1.oo.is(current_u)) {
                        return false; // <----------------------------------- sad path
                    }
                    for (const k of oo_1.oo.keys(current_t)) {
                        const sub_t = unsound_1.unsound.cast_to_not_undefined(current_t[k]);
                        const sub_u = current_u[k];
                        const new_pair = { t: sub_t, u: sub_u };
                        pairs = [new_pair, ...pairs];
                    }
                    continue;
                }
            }
            return true;
        },
        assert(u_toplevel) {
            let infos = [{
                    n: this.name,
                    u: u_toplevel,
                    t,
                }];
            // depth first asserting
            while (infos.length > 0) {
                const current = infos[0];
                // pop head
                [, ...infos] = infos;
                // can't be undefined if the length > 0
                unsound_1.unsound.assert_not_undefined(current);
                const current_n = current.n;
                const current_u = current.u;
                const current_t = current.t;
                try {
                    if (rtti_1.rtti.meta.is(current_t)) {
                        const current_rtti = current_t;
                        current_rtti.assert(current_u);
                        continue; // <------------------------------------- happy path
                    }
                    else {
                        // we're dealing with a record
                        oo_1.oo.assert(current_u);
                        for (const k of oo_1.oo.keys(current_t)) {
                            const sub_n = `${current_n}.${k}`;
                            const sub_u = current_u[k];
                            const sub_t = unsound_1.unsound.cast_to_not_undefined(current_t[k]);
                            const new_info = {
                                n: sub_n,
                                u: sub_u,
                                t: sub_t,
                            };
                            infos = [new_info, ...infos];
                        }
                        continue; // <------------------------------------- happy path
                    }
                }
                catch (e) {
                    if (e instanceof Error) {
                        throw new error_1.FoundatsionError(`While asserting for ${current_n}, an error was thrown:`, e);
                    }
                    else {
                        throw e;
                    }
                }
            }
        },
    };
}
exports.auto = auto;
