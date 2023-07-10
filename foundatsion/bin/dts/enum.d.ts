import { rtti } from "./rtti";
import { tt } from "./type_traits";
type require_const_prim_tpl<ts extends tt.prim[]> = {
    [k in (number & keyof ts)]: tt.is_const_prim<ts[k]> extends true ? ts[k] : tt.const_prim;
};
export declare function f_enum<prims extends tt.prim[]>(name: string, prims: readonly [...prims] & require_const_prim_tpl<prims>): rtti<prims[number]>;
export {};
