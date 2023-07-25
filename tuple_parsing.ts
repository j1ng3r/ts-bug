type inner_tuple<t, ts extends t[]> = ts extends [any, ...infer rest extends number[]] ? rest : never;
type inner_tuple_cults<t, ts extends t[]> = ts extends [any, ...infer rest extends t[]] ? rest : never;

type _num_ = inner_tuple<number, [number, number]>;
type num_arr = inner_tuple_cults<number, [number, number]>;
