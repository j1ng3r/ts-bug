export type any_fn = {
    (...args: any[]): unknown;
};
export declare namespace any_fn {
    const name = "any function";
    function is(u: unknown): u is any_fn;
    function assert(u: unknown): asserts u is any_fn;
}
