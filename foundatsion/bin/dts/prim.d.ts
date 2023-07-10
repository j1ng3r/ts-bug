import { tt } from "./type_traits";
import { rtti } from "./rtti";
export declare function prim<v extends tt.prim>(v: v): rtti<v>;
