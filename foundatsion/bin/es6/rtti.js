import { oo } from "./oo";
import { any_fn } from "./any_fn";
import { string } from "./string";
import { unsound } from "./unsound";
import { FoundatsionError } from "./error";
export var rtti;
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
        return unsound.shut_up(is);
    }
    rtti.is_from_assert = is_from_assert;
    let meta;
    (function (meta) {
        meta.name = "rtti object";
        function is(u) {
            return true
                && oo.is(u)
                && oo.field_is(u, "name", string)
                && oo.field_is(u, "is", any_fn)
                && oo.field_is(u, "assert", any_fn);
        }
        meta.is = is;
        function assert(u) {
            if (!is(u)) {
                throw new FoundatsionError(`Value was ${this.name}!`);
            }
        }
        meta.assert = assert;
    })(meta = rtti.meta || (rtti.meta = {}));
})(rtti || (rtti = {}));
rtti.verify(string); // CULTS
