import { real } from "./real";
import { rtti } from "./rtti";
import { unsigned } from "./unsigned";
export type ureal = unsigned & real;
export declare const ureal: {
    name: string;
    cast_from_string(s: string): ureal;
    is: rtti.is<number & import("./newtype").newtype<"unsigned"> & import("./newtype").newtype<"real">>;
    assert: rtti.assert<number & import("./newtype").newtype<"unsigned"> & import("./newtype").newtype<"real">>;
};
