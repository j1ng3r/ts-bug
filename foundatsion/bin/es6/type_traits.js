export function __unreachable() {
    throw __unreachable;
}
// pleas optimize uwu
export const ignore = (..._) => { };
export const absurd = (_) => __unreachable();
/**
 * λx.x
 *
 * Also functions as upcast.
 */
export const id = (t) => t;
/** Check that a type is true. Useful with conditional types. */
export const ct_true = ignore;
/** obscure type traits that most people won't be using */
export var tt;
(function (tt) {
})(tt || (tt = {}));
