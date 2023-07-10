import { rtti } from "./rtti";
import { any_fn } from "./any_fn";
type template = rtti | {
    [k in string]: template;
};
type auto_decant<t extends template> = t extends rtti<infer i> ? i : t extends {
    name: string;
    is: any_fn;
    assert: any_fn;
} ? never : t extends {
    [k in string]: template;
} ? {
    [k in keyof t]: auto_decant<t[k]>;
} : never;
export type auto<t extends template> = rtti<auto_decant<t>>;
export declare function auto<t extends template>(t: t): auto<t>;
export {};
