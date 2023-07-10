import { rtti } from "./rtti";
import { ignore } from "./type_traits";
export var unknown;
(function (unknown) {
    unknown.name = "unknown";
    function is(_) {
        return true;
    }
    unknown.is = is;
    unknown.assert = ignore;
})(unknown || (unknown = {}));
rtti.verify(unknown);
