export declare namespace never {
    const name = "never";
    function is(_: unknown): _ is never;
    function assert(this: typeof never, _: unknown): asserts _ is never;
}
