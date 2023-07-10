import { rtti } from "./rtti";
type decant_tuple<rs extends readonly [...rtti[]]> = rs extends readonly [rtti<infer t>, ...infer tail extends [...rtti[]]] ? [t, ...decant_tuple<tail>] : [];
export declare function tuple<rs extends rtti[]>(...rs: readonly [...rs]): rtti<decant_tuple<rs>>;
export {};
