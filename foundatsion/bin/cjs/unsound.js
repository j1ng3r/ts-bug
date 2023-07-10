"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsound = void 0;
const type_traits_1 = require("./type_traits");
var unsound;
(function (unsound) {
    /** Cast any value to type t. */
    unsound.cast = type_traits_1.id;
    unsound.cast_to_not_undefined = type_traits_1.id;
    /** `bless` is an alias for cast. Used for blessing newtypes only. */
    unsound.bless = unsound.cast;
    /** Changes the type of an identifier. */
    unsound.assert = type_traits_1.ignore;
    unsound.assert_and_return = type_traits_1.ignore;
    unsound.assert_not_undefined = type_traits_1.ignore;
    /**
     * Used for stubborn expressions. In general, you should use `unsound.cast`
     * but in a pinch, this will do. Usually this is used from the "insertion" or
     * "subtype" side of expressions.
     */
    unsound.shut_up = type_traits_1.id;
    /**
     * Similar to `unsound.shut_up` but for the receiving side of expressions.
     * Sometimes you're putting the right types into the "wrong" function.
     * Tell TypeScript to fuck off and let you use the function because *you*
     * know it's right. #informal-verification-winners.
     */
    unsound.fuck_off = type_traits_1.id;
})(unsound = exports.unsound || (exports.unsound = {}));
