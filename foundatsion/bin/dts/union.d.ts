import { rtti } from "./rtti";
type union_decant<rs extends [...rtti[]]> = rs[number] extends rtti<infer ts> ? ts : never;
export type union<rs extends [...rtti[]]> = rtti<union_decant<rs>>;
export declare function union<rs extends rtti[]>(...rs: readonly [...rs]): union<rs>;
export {};
