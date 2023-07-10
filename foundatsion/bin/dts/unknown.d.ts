import { rtti } from "./rtti";
export declare namespace unknown {
    const name = "unknown";
    function is(_: unknown): _ is unknown;
    const assert: rtti.assert;
}
