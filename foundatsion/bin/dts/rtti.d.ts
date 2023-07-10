export type rtti<t = unknown> = {
    name: string;
    is: rtti.is<t>;
    assert: rtti.assert<t>;
};
export declare namespace rtti {
    export type t<r extends rtti> = r extends rtti<infer t> ? t : never;
    export type is<t = unknown> = {
        (u: unknown): u is t;
    };
    export type assert<t = unknown> = {
        (u: unknown): asserts u is t;
    };
    type isish<t> = {
        is: is<t>;
    };
    type assertish<t> = {
        assert: assert<t>;
    };
    type castish<t = unknown> = {
        [k in `cast_from_${string}`]: {
            (a: any): t;
        };
    } & {
        [k in `cast_to_${string}`]: {
            (t: t): any;
        };
    };
    const dummy: unique symbol;
    type dummy = typeof dummy;
    type verify_implicit<r extends rtti> = r extends isish<infer is_t> & assertish<infer assert_t> ? (is_t | assert_t) extends (is_t & assert_t) ? castish<is_t> : ["Type mismatch between return type of is and assert:", is_t, "is not equal to", assert_t] : never;
    export function verify<no_explicit_type_parameters extends dummy = dummy, r extends rtti = rtti>(_: r & verify_implicit<r>): void & no_explicit_type_parameters;
    export function is_from_assert<t>(a: assert<t>): is<t>;
    export namespace meta {
        const name = "rtti object";
        function is(u: unknown): u is rtti;
        function assert(this: typeof meta, u: unknown): asserts u is rtti;
    }
    export {};
}
