import { newtype } from "./newtype";
export type unsigned = (bigint | number) & newtype<"unsigned">;
export declare namespace unsigned {
    const name = "unsigned";
    function is_from_bigint_or_number(b: bigint | number): b is unsigned;
    const is_from_bigint: typeof is_from_bigint_or_number;
    const is_from_number: typeof is_from_bigint_or_number;
    function is(u: unknown): u is unsigned;
    function assert_from_bigint_or_number(b: bigint | number): asserts b is unsigned;
    const assert_from_bigint: typeof assert_from_bigint_or_number;
    const assert_from_number: typeof assert_from_bigint_or_number;
    function assert(u: unknown): asserts u is unsigned;
}
