import { text } from "./text";
import { unsound } from "./unsound";
import { FoundatsionError } from "./error";
import { id, ignore } from "./type_traits";
export var oo;
(function (oo) {
    oo.name = "open-object";
    function is(u) {
        return typeof u === "object" && u !== null;
    }
    oo.is = is;
    function assert(u) {
        if (typeof u !== "object") {
            throw new FoundatsionError(`Asserting for ${this.name} failed!\n`, `typeof value was "${typeof u}" when it should've been "object".`);
        }
        if (u === null) {
            throw new FoundatsionError(`Asserting for ${this.name} failed because the value was null.`);
        }
    }
    oo.assert = assert;
    oo.assert_from_record = ignore;
    oo.cast_from_record = id;
    function field_is(o, k, t) {
        return t.is(o[k]);
    }
    oo.field_is = field_is;
    /** Assert that an object has a property of type t. */
    function assert_field_is(o, k, t) {
        try {
            t.assert(o[k]);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new FoundatsionError(
                // JSON.stringify(k) is used to escape quotes and other weird
                // characters within k.
                `While asserting for {[${text.show(k)}]: ${t.name}}`, "an error was thrown:", e);
            }
            else {
                throw e;
            }
        }
    }
    oo.assert_field_is = assert_field_is;
    function freeze(obj) {
        Object.freeze(obj);
    }
    oo.freeze = freeze;
    // it may be incorrect but I'm past caring
    function keys(o) {
        return unsound.shut_up(Object.keys(o));
    }
    oo.keys = keys;
})(oo || (oo = {}));
