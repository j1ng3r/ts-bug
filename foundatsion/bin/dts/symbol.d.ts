export declare namespace symbol {
    const name = "symbol";
    function is(u: unknown): u is symbol;
    function assert(this: typeof symbol, u: unknown): asserts u is symbol;
    const cast_from_string: (key: string) => symbol;
}
