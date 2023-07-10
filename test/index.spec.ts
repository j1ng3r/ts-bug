import {Eq, eq, False, T, lt, lte, True} from "./index";

T<string>() satisfies string;

True<never>();
True<true>();
// @ts-expect-error
True<false>();
// @ts-expect-error
True<boolean>();

False<never>();
False<false>();
// @ts-expect-error
False<true>();
// @ts-expect-error
False<boolean>();

type bottom = "a" | "b";
type middle1 = "a" | "b" | "c";
type middle2 = "a" | "b" | "d";
type top = "a" | "b" | "c" | "d";

True<lte<bottom, bottom>>();
True<lte<bottom, top>>();
False<lte<top, bottom>>();
False<lte<middle1, middle2>>();

// @ts-expect-error
Eq<any>()(T<string>());

// This works for some reason but I don't really know if I want this behavior or not.

False<lt<bottom, bottom>>();
True<lt<bottom, top>>();
False<lt<top, bottom>>();
False<lt<middle1, middle2>>();

True<eq<bottom, bottom>>();
False<eq<bottom, top>>();
False<eq<top, bottom>>();
False<eq<middle1, middle2>>();

Eq<bottom>()(T<bottom>());
// @ts-expect-error
Eq<bottom>()(T<top>());
// @ts-expect-error
Eq<top>()(T<bottom>());
// @ts-expect-error
Eq<middle1>()(T<middle2>());

// @ts-expect-error
T<string & {toLowerCase: {(): "hi"}}>().toLowerCase() satisfies "hi";
T<{toLowerCase: {(): "hi"}} & string>().toLowerCase() satisfies "hi";

// @ts-expect-error
Eq<"hi">()(T<string & {toLowerCase: {(): "hi"}}>().toLowerCase());
Eq<"hi">()(T<{toLowerCase: {(): "hi"}} & string>().toLowerCase());
