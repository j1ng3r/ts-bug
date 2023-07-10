import {F} from "./foundatsion/bin/dts";

declare const api_in_s: unique symbol;
type api_in_s = typeof api_in_s;
type api_in<t> = {[api_in_s]: void} | t;
type ct_api_in<u> = u extends {[api_in_s]: void} ? never : u;
declare function ct_api_in<u>(u: u & ct_api_in<u>): void;

// Helpers
declare function returns<t>(): t;
declare function assert<t>(u: unknown): asserts u is t;
declare function assert<t, u>(t: t, u: u): asserts u is u & t;
declare function takes<t>(b: t): void;

// Begin demonstration
declare const bigin_succ: api_in<bigint>;
ct_api_in(bigin_succ);                 // should error
assert(returns<bigint | number>(), bigin_succ);
ct_api_in(bigin_succ);                 // should error
assert<bigint>(bigin_succ);
ct_api_in(bigin_succ);
takes<bigint>(bigin_succ);

declare const bigin_fail: api_in<bigint>;
ct_api_in(bigin_fail);                 // should error
assert<number>(bigin_fail);
ct_api_in(bigin_fail);                 // should error
takes<number>(bigin_fail);

declare const why: bigint | number;
assert<bigint | F.newtype<"a">>(why);


why;

type test = ({[api_in_s]: void} | bigint) & (bigint | number);
declare const test: test;

declare const unioin: api_in<bigint> | api_in<number>;

type n = number & F.newtype<"a">;
declare const n: n;
takes_number(n);
