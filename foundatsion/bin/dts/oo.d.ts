import { rtti } from "./rtti";
/** Open Object */
export type oo = object & {
    [k in string]: unknown;
};
export declare namespace oo {
    const name = "open-object";
    function is(u: unknown): u is oo;
    function assert(this: typeof oo, u: unknown): asserts u is oo;
    const assert_from_record: {
        (o: {}): asserts o is oo;
    };
    const cast_from_record: {
        (r: {}): oo;
    };
    function field_is<t, k extends string, o extends oo>(o: o, k: k, t: rtti<t>): o is merge<o & {
        [_ in k]: t;
    }>;
    /** Assert that an object has a property of type t. */
    function assert_field_is<t, k extends string, o extends oo>(o: o, k: k, t: rtti<t>): asserts o is merge<o & {
        [_ in k]: t;
    }>;
    function freeze<t>(obj: t): asserts obj is Readonly<t>;
    function keys<o extends {}>(o: o): (keyof o)[];
    /**
     * @example
     * type a = {w: x} & {y: z};
     * type b = {w: x; y: z};
     *
     * // a has different behavior than b
     */
    type merge<o extends {}> = {
        [k in keyof o]: o[k];
    };
}
