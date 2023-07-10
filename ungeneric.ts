type generic<T> = T extends string ? T : T[];
declare function ungeneric<T>(value: generic<T>): T;
declare function T<T>(): T;
const string = ungeneric(T<string>());
const number = ungeneric(T<number>());
const numbers = ungeneric(T<number[]>());
const numbers_yes = ungeneric<number>(T<number[]>());

type generic2<T> = T extends string ? T[] : T;
declare function ungeneric2<T>(value: generic2<T>): T;
const string2 = ungeneric2(T<string>());
const strings2 = ungeneric2(T<string[]>());
const number2 = ungeneric2(T<number>());
const numbers2 = ungeneric2(T<number[]>());
