import { rtti } from "./rtti";
type inter_decant<rs> = rs extends [rtti<infer t>, ...infer tail] ? t & inter_decant<tail> : unknown;
export declare function inter<rs extends rtti[]>(...rs: readonly [...rs]): rtti<inter_decant<rs>>;
export {};
