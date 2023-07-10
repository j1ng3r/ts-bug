export declare namespace number {
    const name = "number";
    function is(u: unknown): u is number;
    function assert(this: typeof number, u: unknown): asserts u is number;
    const cast_from: {
        (u: unknown): number;
    };
    const cast_from_string: {
        (s: string): number;
    };
    const cast_from_bigint: {
        (b: bigint): number;
    };
}
