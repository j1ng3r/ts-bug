declare const s: unique symbol;
declare function assert<t>(u: unknown): asserts u is t;
declare function assert2<t, u>(t: t, u: u): asserts u is u & t;
declare function returns<t>(): t;
declare function is<t>(u: unknown): u is t;
type onion = bigint | {[s]: void};
declare const onion: onion;
declare const why: bigint | number;
if (Math.random() > 0.5) {
   assert<onion>(why);
   const b: bigint = why;
} else {
   assert2(onion, why);
   const b: bigint = why;
}

declare function id3<t, u>(f: {(): t}, u: u): u | t;


const z = id3(returns<string>, 17);

declare const why2: (bigint | number) & (bigint | {[s]: void});




const b2: bigint = why2;

declare const why3: bigint | number;


