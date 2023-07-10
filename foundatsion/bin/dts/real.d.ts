import { newtype } from "./newtype";
export type real = number & newtype<"real">;
export declare namespace real {
    const name = "real";
    function is(u: unknown): u is real;
    function assert(this: typeof real, u: unknown): asserts u is real;
    function cast_from_string(this: typeof real, s: string): real;
}
