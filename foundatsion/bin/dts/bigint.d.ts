export declare namespace bigint {
    const name = "bigint";
    function is(u: unknown): u is bigint;
    function assert(this: typeof bigint, u: unknown): asserts u is bigint;
    const cast_from: {
        (u: unknown): bigint;
    };
    const cast_from_number: {
        (n: number): bigint;
    };
    const cast_from_string: {
        (s: string): bigint;
    };
}
