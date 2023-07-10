function is_undefined(u: unknown): u is undefined {
   return u === undefined;
}

declare function takes_undefined(u: undefined): void;
declare function takes_not_undefined(u: {} | null): void;

declare const x: unknown;
declare const y: unknown;

if (x === undefined) {
   takes_undefined(x);
} else {
   takes_not_undefined(x);
}

if (is_undefined(y)) {
   takes_undefined(y);
} else {
   // The following line does not compile, but it should
   takes_not_undefined(y);
}
