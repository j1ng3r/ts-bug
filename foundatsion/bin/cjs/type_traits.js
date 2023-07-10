"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tt = exports.ct_true = exports.id = exports.absurd = exports.ignore = exports.__unreachable = void 0;
function __unreachable() {
    throw __unreachable;
}
exports.__unreachable = __unreachable;
// pleas optimize uwu
const ignore = (..._) => { };
exports.ignore = ignore;
const absurd = (_) => __unreachable();
exports.absurd = absurd;
/**
 * λx.x
 *
 * Also functions as upcast.
 */
const id = (t) => t;
exports.id = id;
/** Check that a type is true. Useful with conditional types. */
exports.ct_true = exports.ignore;
/** obscure type traits that most people won't be using */
var tt;
(function (tt) {
})(tt = exports.tt || (exports.tt = {}));
