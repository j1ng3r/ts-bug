import { rtti } from "./rtti";
import { text } from "./text";
import { unsound } from "./unsound";
import { FoundatsionError } from "./error";
export var int;
(function (int) {
    int.name = "int";
    function is(u) {
        return Number.isInteger(u);
    }
    int.is = is;
    function assert(u) {
        if (is(u))
            return;
        else
            throw new FoundatsionError(`Tried asserting for ${this.name} but failed Number.isInteger(${text.show(u)})`, "returned false.");
    }
    int.assert = assert;
    function cast_from_string(s) {
        const i = Number(s);
        if (Number.isInteger(i))
            return i;
        else
            throw new FoundatsionError(`Could not cast string to ${this.name} because Number.isInteger(${text.show(i)})`, "returned false.");
    }
    int.cast_from_string = cast_from_string;
    function cast_from_bigint(b) {
        const n = Number(b);
        if (`${b}` !== `${n}`) {
            throw new FoundatsionError(`Loss of precision when converting from bigint to ${this.name}!\n`, `${b} !== ${n}`);
        }
        return unsound.cast(n);
    }
    int.cast_from_bigint = cast_from_bigint;
})(int || (int = {}));
rtti.verify(int);
