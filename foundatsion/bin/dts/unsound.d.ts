import type { rtti } from "./rtti";
export declare namespace unsound {
    /** Cast any value to type t. */
    const cast: {
        <t>(val: any): t;
    };
    const cast_to_not_undefined: {
        <t>(v: t): Exclude<t, undefined>;
    };
    /** `bless` is an alias for cast. Used for blessing newtypes only. */
    const bless: <t>(val: any) => t;
    /** Changes the type of an identifier. */
    const assert: {
        <t>(val: any): asserts val is t;
    };
    const assert_and_return: {
        <t, v>(r: rtti<t>, v: v): t & v;
    };
    const assert_not_undefined: {
        <t>(v: t): asserts v is Exclude<t, undefined>;
    };
    /**
     * Used for stubborn expressions. In general, you should use `unsound.cast`
     * but in a pinch, this will do. Usually this is used from the "insertion" or
     * "subtype" side of expressions.
     */
    const shut_up: {
        (non_cubist: any): never;
    };
    /**
     * Similar to `unsound.shut_up` but for the receiving side of expressions.
     * Sometimes you're putting the right types into the "wrong" function.
     * Tell TypeScript to fuck off and let you use the function because *you*
     * know it's right. #informal-verification-winners.
     */
    const fuck_off: {
        (stubborn: any): any;
    };
}
