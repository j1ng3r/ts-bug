import { union } from "./union";
import { bigint } from "./bigint";
import { number } from "./number";
import { FoundatsionError } from "./error";
{
    const r = union(bigint, number);
    var bigint_or_number = r;
}
export var unsigned;
(function (unsigned) {
    unsigned.name = "unsigned";
    function is_from_bigint_or_number(b) {
        // NaN fails this as it should
        return b >= 0;
    }
    unsigned.is_from_bigint_or_number = is_from_bigint_or_number;
    unsigned.is_from_bigint = is_from_bigint_or_number;
    unsigned.is_from_number = is_from_bigint_or_number;
    function is(u) {
        return bigint_or_number.is(u) && is_from_bigint_or_number(u);
    }
    unsigned.is = is;
    function assert_from_bigint_or_number(b) {
        if (is_from_bigint_or_number(b))
            return;
        throw new FoundatsionError(`Could not assert for unsigned because ${b} was not greater than or`, "equal to zero!");
    }
    unsigned.assert_from_bigint_or_number = assert_from_bigint_or_number;
    // YES!!! YES YES YES !! O MY GOD I LOVE THIS LANGUAGE
    unsigned.assert_from_bigint = assert_from_bigint_or_number;
    unsigned.assert_from_number = assert_from_bigint_or_number;
    function assert(u) {
        try {
            bigint_or_number.assert(u);
            assert_from_bigint_or_number(u);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new FoundatsionError("While asserting for unsigned an error was thrown:", e);
            }
            else {
                throw e;
            }
        }
    }
    unsigned.assert = assert;
})(unsigned || (unsigned = {}));
