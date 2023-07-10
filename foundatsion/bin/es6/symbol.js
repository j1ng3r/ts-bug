import { rtti } from "./rtti";
import { FoundatsionError } from "./error";
export var symbol;
(function (symbol) {
    symbol.name = "symbol";
    function is(u) {
        return typeof u === "symbol";
    }
    symbol.is = is;
    function assert(u) {
        if (typeof u !== "symbol") {
            throw new FoundatsionError(`Tried asserting for ${this.name} but failed.\n`, `typeof value was "${typeof u}" when it should've been "symbol".`);
        }
    }
    symbol.assert = assert;
    symbol.cast_from_string = Symbol.for.bind(Symbol);
})(symbol || (symbol = {}));
rtti.verify(symbol);
