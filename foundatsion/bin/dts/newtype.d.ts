import { tt } from "./type_traits";
/**
 * Compiletime newtype property holder.
 * Exported because the typescript compiler needs to be able to refer to this
 * fake symbol inter-module.
 *
 * Search for errors like "cannot be named" to understand why this needs to
 * happen.
 */
export declare const nt_s: unique symbol;
type newtype_partials_union<uniq_union extends keyof any> = {
    [k in uniq_union]: {
        [nt_s]: {
            [_ in k]: void;
        };
    };
}[uniq_union];
export type newtype<uniq extends string | symbol> = {
    [nt_s]: {
        [k in uniq]: void;
    };
};
export type unwrap<outer> = outer extends {
    [nt_s]: {};
} ? outer extends infer inner & tt.union_to_intersection<newtype_partials_union<keyof outer[typeof nt_s]>> ? inner : never : outer;
export declare const unwrap: {
    <outer>(outer: outer): unwrap<outer>;
};
export {};
