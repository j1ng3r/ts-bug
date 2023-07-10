import { real } from "./real";
import { newtype } from "./newtype";
export type int = real & newtype<"int">;
export declare namespace int {
    const name = "int";
    function is(u: unknown): u is int;
    function assert(this: typeof int, u: unknown): asserts u is int;
    function cast_from_string(this: typeof int, s: string): int;
    function cast_from_bigint(this: typeof int, b: bigint): int;
}
