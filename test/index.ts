/**
 * Returns a value (at compile-time) of type t
 */
export declare function T<t>(): t;

/**
 * Typechecks if it's type parameter extends true
 */
export declare function True<t extends true>(): t;
/**
 * Typechecks if it's type parameter extends false
 */
export declare function False<t extends false>(): t;

type _lte<a, b> = a extends b ? true : false;
/**
 * Returns true if a is a subtype of b, false otherwise
 */
export type lte<a, b> = false extends _lte<a, b> ? false : true;
/**
 * Returns true if a is a strict subtype of b, false otherwise
 */
export type lt<a, b> = false extends _lte<a, b> ? false : false extends _lte<b, a> ? true : false;

/**
 * Returns true if a and b both extend each other, false otherwise
 */
export type eq<a, b> = false extends _lte<a, b> ? false : false extends _lte<b, a> ? false : true;

type _eq<a, b> = false extends _lte<a, b> ? never : false extends _lte<b, a> ? never : unknown;
/**
 * Returns true if the input type and the type of the second value are identical. Used like `Eq<type>()(value);`
 */
export declare function Eq<a>(): {<b>(b: b & _eq<a, b>): void};
