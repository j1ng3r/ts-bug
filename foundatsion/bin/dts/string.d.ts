export declare namespace string {
    const name = "string";
    function is(u: unknown): u is string;
    function assert(this: typeof string, u: unknown): asserts u is string;
    const cast_from: StringConstructor;
    const cast_from_bigint: StringConstructor;
    const cast_from_number: StringConstructor;
}
