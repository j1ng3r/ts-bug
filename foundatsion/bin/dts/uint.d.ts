import { int } from "./int";
import { rtti } from "./rtti";
import { ubigint } from "./ubigint";
import { unsigned } from "./unsigned";
export type uint = unsigned & int;
export declare const uint: {
    name: string;
    cast_from_ubigint(u: ubigint): uint;
    cast_from_string(s: string): uint;
    is: rtti.is<number & import("./newtype").newtype<"unsigned"> & import("./newtype").newtype<"real"> & import("./newtype").newtype<"int">>;
    assert: rtti.assert<number & import("./newtype").newtype<"unsigned"> & import("./newtype").newtype<"real"> & import("./newtype").newtype<"int">>;
};
