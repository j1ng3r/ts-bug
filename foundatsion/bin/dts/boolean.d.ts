export declare namespace boolean {
    const name = "boolean";
    function is(u: unknown): u is boolean;
    function assert(this: typeof boolean, u: unknown): asserts u is boolean;
}
