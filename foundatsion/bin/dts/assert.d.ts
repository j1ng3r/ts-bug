import { rtti } from "./rtti";
/**
 * Sometimes you truly cannot be bothered to annotate the type of an rtti object.
 * Fret not, dear child! You can simply use this function to skirt the explicit
 * annotation requirement.
 *
 * In general, though, you really shouldn't be using this. Annotating the rtti
 * object isn't that difficult.
 */
export declare function assert<t>(r: rtti<t>, u: unknown): asserts u is t;
/**
 * How is this any different than `rtti#cast_from`?
 * This never modifies the actual runtime value.
 */
export declare function assert_and_return<t, u>(r: rtti<t>, u: u): u & t;
