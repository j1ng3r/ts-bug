"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert_and_return = exports.assert = void 0;
/**
 * Sometimes you truly cannot be bothered to annotate the type of an rtti object.
 * Fret not, dear child! You can simply use this function to skirt the explicit
 * annotation requirement.
 *
 * In general, though, you really shouldn't be using this. Annotating the rtti
 * object isn't that difficult.
 */
function assert(r, u) {
    r.assert(u);
}
exports.assert = assert;
/**
 * How is this any different than `rtti#cast_from`?
 * This never modifies the actual runtime value.
 */
function assert_and_return(r, u) {
    r.assert(u);
    return u;
}
exports.assert_and_return = assert_and_return;
