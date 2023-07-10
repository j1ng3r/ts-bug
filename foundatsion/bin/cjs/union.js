"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = void 0;
const never_1 = require("./never");
const unsound_1 = require("./unsound");
const error_1 = require("./error");
const oo_1 = require("./oo");
// I'm adding a little bit of extra type information that *technically*
// shouldn't exist on an rtti object but I'm not telling anyone, are you?
const union_rtti_ary = Symbol();
var union_rtti_object;
(function (union_rtti_object) {
    function is(u) {
        // This is really not good enough to prove that u is union_rtti_object.
        // But if someone else gets a hold of that symbol, that's not really
        // something that I can prevent.
        return Object.hasOwnProperty.call(u, union_rtti_ary);
    }
    union_rtti_object.is = is;
})(union_rtti_object || (union_rtti_object = {}));
function union(...rs) {
    if (rs.length === 0) {
        return never_1.never;
    }
    if (rs.length === 1) {
        return unsound_1.unsound.shut_up(rs[0]);
    }
    const non_union_rs = [];
    for (const r of rs) {
        if (union_rtti_object.is(r)) {
            // if it's another union object, we can unwrap the union into this one
            non_union_rs.push(...r[union_rtti_ary]);
        }
        else {
            non_union_rs.push(r);
        }
    }
    const new_rtti = {
        name: `${rs.map(r => r.name).join(" | ")}`,
        is(u) {
            return non_union_rs.some(r => r.is(u));
        },
        assert(u) {
            const errs = [];
            for (const r of non_union_rs) {
                try {
                    r.assert(u);
                    return;
                }
                catch (e) {
                    if (e instanceof Error) {
                        errs.push(e);
                    }
                    else {
                        throw e;
                    }
                }
            }
            throw new error_1.FoundatsionError(`While asserting that value was ${this.name} one or more errors were`, "thrown:", ...errs);
        },
    };
    Object.defineProperty(new_rtti, union_rtti_ary, {
        configurable: false,
        enumerable: false,
        value: non_union_rs,
        writable: false,
    });
    oo_1.oo.freeze(new_rtti);
    return new_rtti;
}
exports.union = union;
