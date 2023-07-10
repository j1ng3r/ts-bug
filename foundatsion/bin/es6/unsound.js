import { id, ignore } from "./type_traits";
export var unsound;
(function (unsound) {
    /** Cast any value to type t. */
    unsound.cast = id;
    unsound.cast_to_not_undefined = id;
    /** `bless` is an alias for cast. Used for blessing newtypes only. */
    unsound.bless = unsound.cast;
    /** Changes the type of an identifier. */
    unsound.assert = ignore;
    unsound.assert_and_return = ignore;
    unsound.assert_not_undefined = ignore;
    /**
     * Used for stubborn expressions. In general, you should use `unsound.cast`
     * but in a pinch, this will do. Usually this is used from the "insertion" or
     * "subtype" side of expressions.
     */
    unsound.shut_up = id;
    /**
     * Similar to `unsound.shut_up` but for the receiving side of expressions.
     * Sometimes you're putting the right types into the "wrong" function.
     * Tell TypeScript to fuck off and let you use the function because *you*
     * know it's right. #informal-verification-winners.
     */
    unsound.fuck_off = id;
})(unsound || (unsound = {}));
