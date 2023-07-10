"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknown = void 0;
const rtti_1 = require("./rtti");
const type_traits_1 = require("./type_traits");
var unknown;
(function (unknown) {
    unknown.name = "unknown";
    function is(_) {
        return true;
    }
    unknown.is = is;
    unknown.assert = type_traits_1.ignore;
})(unknown = exports.unknown || (exports.unknown = {}));
rtti_1.rtti.verify(unknown);
