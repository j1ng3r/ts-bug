"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rtti = void 0;
const oo_1 = require("./oo");
const any_fn_1 = require("./any_fn");
const string_1 = require("./string");
const unsound_1 = require("./unsound");
const error_1 = require("./error");
var rtti;
(function (rtti) {
    // prevent user from putting explicit type parameters
    function verify(_) { }
    rtti.verify = verify;
    function is_from_assert(a) {
        function is(u) {
            try {
                a(u);
                return true;
            }
            catch (e) {
                if (e instanceof Error) {
                    return false;
                }
                else {
                    throw e;
                }
            }
        }
        return unsound_1.unsound.shut_up(is);
    }
    rtti.is_from_assert = is_from_assert;
    let meta;
    (function (meta) {
        meta.name = "rtti object";
        function is(u) {
            return true
                && oo_1.oo.is(u)
                && oo_1.oo.field_is(u, "name", string_1.string)
                && oo_1.oo.field_is(u, "is", any_fn_1.any_fn)
                && oo_1.oo.field_is(u, "assert", any_fn_1.any_fn);
        }
        meta.is = is;
        function assert(u) {
            if (!is(u)) {
                throw new error_1.FoundatsionError(`Value was ${this.name}!`);
            }
        }
        meta.assert = assert;
    })(meta = rtti.meta || (rtti.meta = {}));
})(rtti = exports.rtti || (exports.rtti = {}));
rtti.verify(string_1.string); // CULTS
