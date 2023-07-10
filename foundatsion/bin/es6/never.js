import { rtti } from "./rtti";
import { FoundatsionError } from "./error";
export var never;
(function (never) {
    never.name = "never";
    function is(_) {
        return false;
    }
    never.is = is;
    function assert(_) {
        throw new FoundatsionError(`Tried asserting for ${this.name} but that's absurd!`);
    }
    never.assert = assert;
})(never || (never = {}));
rtti.verify(never);
