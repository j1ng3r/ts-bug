import { newtype } from "./newtype";
export declare class FoundatsionError extends Error {
    name: string;
    passages: FoundatsionError.passages;
    /**
     * Use `"\n"` to indicate a newline.
     * Entries that do not end in newline will be concatenated with a space and
     * the entry after it.
     * You do not need to add a newline before Errors.
     * One is added automatically.
     */
    constructor(...msg: FoundatsionError.input_arg[]);
}
export declare namespace FoundatsionError {
    /** A line is a string without a newline in it. */
    type line = string & newtype<"FoundatsionError.line">;
    namespace line {
        const name = "FoundatsionError.line";
        function is(u: unknown): u is line;
        function assert(this: typeof line, u: unknown): asserts u is line;
        /** turns \n into "\\n" */
        function escape_string(s: string): line;
        function split_into(s: string): line[];
        const wrap: {
            (l: line, line_length: number): line[];
        };
    }
    /**
     * A passage represents a multiple indented (or unindented) blocks of text.
     */
    type passage = line | passage[];
    namespace passage {
        const name = "FoundatsionError.passage";
        function is(u: unknown): u is passage;
        function assert(this: typeof passage, u: unknown): asserts u is passage;
        const default_line_wrap = 80;
        function cast_to_lines(l: passage, line_length?: number): line[];
    }
    type passages = passage[];
    namespace passages {
        function cast_to_string(passages: passage[]): string;
    }
    type input_arg = passages | FoundatsionError | Error | string;
}
