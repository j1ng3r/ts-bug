import { rtti } from "./rtti";
import { unsigned } from "./unsigned";
export type ubigint = unsigned & bigint;
export declare const ubigint: {
    name: string;
    cast_from(u: unknown): ubigint;
    cast_from_string(s: string): ubigint;
    is: rtti.is<bigint & import("./newtype").newtype<"unsigned">>;
    assert: rtti.assert<bigint & import("./newtype").newtype<"unsigned">>;
};
