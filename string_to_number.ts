import { True, eq } from "./test";

type string_to_number<s extends string> = s extends `${infer n extends number}` ? n : never;

True<eq<number, string_to_number<`${number}`>>>();
True<eq<100, string_to_number<"100">>>();
True<eq<-100, string_to_number<"-100">>>();
True<eq<100, string_to_number<"100">>>();
True<eq<9007199254740991, string_to_number<"9007199254740991">>>();
True<eq<number, string_to_number<"9007199254740993">>>(); // silly
