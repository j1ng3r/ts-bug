// I really wish I didn't have to do this but such is life.
// Since assertion functions require that their identifier has an explicit type
// annotation, I must re-declare, annotate and export any rtti objects that
// contain assertion functions.
export { array } from "./array";
import { assert as _assert } from "./assert";
export const assert = _assert;
export { assert_and_return } from "./assert";
export { auto } from "./auto";
import { bigint as _bigint } from "./bigint";
export const bigint = _bigint;
import { boolean as _boolean } from "./boolean";
export const boolean = _boolean;
export { f_enum as enum } from "./enum";
export { FoundatsionError as Error } from "./error";
import { int as _int } from "./int";
export const int = _int;
export { inter } from "./inter";
import { never as _never } from "./never";
export const never = _never;
export { nt_s, unwrap } from "./newtype";
import { number as _number } from "./number";
export const number = _number;
import { oo as _oo } from "./oo";
export const oo = _oo;
export { prim } from "./prim";
import { real as _real } from "./real";
export const real = _real;
export { rtti } from "./rtti";
import { string as _string } from "./string";
export const string = _string;
import { symbol as _symbol } from "./symbol";
export const symbol = _symbol;
export { text } from "./text";
export { tuple } from "./tuple";
export { __unreachable, ignore, absurd, id, ct_true, tt, } from "./type_traits";
import { ubigint as _ubigint } from "./ubigint";
export const ubigint = _ubigint;
import { uint as _uint } from "./uint";
export const uint = _uint;
export { union } from "./union";
import { unknown as _unknown } from "./unknown";
export const unknown = _unknown;
import { unsigned as _unsigned } from "./unsigned";
export const unsigned = _unsigned;
import { unsound as _unsound } from "./unsound";
export const unsound = _unsound;
import { ureal as _ureal } from "./ureal";
export const ureal = _ureal;
