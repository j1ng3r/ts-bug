"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundatsionError = void 0;
const text_1 = require("./text");
const string_1 = require("./string");
const unsound_1 = require("./unsound");
class FoundatsionError extends Error {
    /**
     * Use `"\n"` to indicate a newline.
     * Entries that do not end in newline will be concatenated with a space and
     * the entry after it.
     * You do not need to add a newline before Errors.
     * One is added automatically.
     */
    constructor(...msg) {
        const new_passages = [];
        let linebuffer = null;
        for (const e of msg) {
            if (typeof e === "string") {
                let string_arg = e;
                // while we can find a newline in the string
                for (let idx_of_newline; (idx_of_newline = string_arg.indexOf("\n")) > 0;) {
                    const line = string_arg.slice(0, idx_of_newline);
                    string_arg = string_arg.slice(idx_of_newline + 1);
                    unsound_1.unsound.assert(line);
                    // [1]
                    // this one confused me initially when I read it a second time.
                    // normally when we have a line, we append it to the linebuffer
                    // with a space (see condition 3) but in this case, there's
                    // nothing in the linebuffer.
                    // It'd be kinda strange to just add a space, now wouldn't it?
                    if (linebuffer === null) {
                        flush: new_passages.push(line);
                        linebuffer;
                        continue;
                    }
                    // [2]
                    // When a string is split with an lf at the start or end like so:
                    // "\nbar baz\n".split('\n') -> ["", "bar baz", ""].
                    // If we imagine the linebuffer = "foo", we don't want to flush
                    // "foo ". We just want to flush without adding a space.
                    if (line === "") {
                        flush: new_passages.push(linebuffer);
                        linebuffer = null;
                        linebuffer;
                        continue;
                    }
                    // [3] (condition 3)
                    // the linebuffer has something in it and line is normalish.
                    // concatenate with a space and then flush.
                    linebuffer = unsound_1.unsound.cast(`${linebuffer} ${line}`);
                    flush: new_passages.push(linebuffer);
                    linebuffer = null;
                    linebuffer;
                    continue;
                }
                // from here on out, string_arg doesn't contain any newlines.
                unsound_1.unsound.assert(string_arg);
                if (string_arg.length > 0) {
                    // there's still stuff after the last newline
                    if (linebuffer === null) {
                        linebuffer = string_arg;
                    }
                    else {
                        linebuffer = unsound_1.unsound.cast(` ${string_arg}`);
                    }
                }
                // linebuffer could have stuff in it
                continue; // next argument
            }
            // passages
            if (Array.isArray(e)) {
                if (linebuffer !== null) {
                    flush: new_passages.push(linebuffer);
                    linebuffer = null;
                }
                new_passages.push(e);
                linebuffer;
                continue;
            }
            if (e instanceof FoundatsionError) {
                if (linebuffer !== null) {
                    new_passages.push(linebuffer);
                    linebuffer = null;
                }
                const escapedname = FoundatsionError.line.escape_string(e.name);
                const header = `${escapedname}:`;
                unsound_1.unsound.assert(header);
                /*
                   FoundatsionError:
                   > blah blah blah
                   > blah blah blah
                   > FoundatsionError
                   > > other stuff here
                   > > other stuff here
                */
                new_passages.push(header);
                new_passages.push(e.passages);
                linebuffer;
                continue;
            }
            if (e instanceof Error) {
                if (linebuffer !== null) {
                    new_passages.push(linebuffer);
                    linebuffer = null;
                }
                const sublines = FoundatsionError.line.split_into(e.message);
                if (sublines[0] === "") {
                    sublines.shift();
                }
                if (sublines[sublines.length - 1] === "") {
                    sublines.pop();
                }
                const escapedname = FoundatsionError.line.escape_string(e.name);
                const header = `${escapedname}:`;
                unsound_1.unsound.assert(header);
                new_passages.push(header);
                new_passages.push(sublines);
                linebuffer;
                continue;
            }
        }
        if (linebuffer !== null) {
            new_passages.push(linebuffer);
            linebuffer = null;
        }
        linebuffer;
        super(FoundatsionError.passages.cast_to_string(new_passages));
        this.name = "FoundatsionError";
        Object.defineProperty(this, "lines", {
            configurable: false,
            enumerable: false,
            value: new_passages,
            writable: false,
        });
    }
}
exports.FoundatsionError = FoundatsionError;
(function (FoundatsionError) {
    let line;
    (function (line) {
        line.name = "FoundatsionError.line";
        function is(u) {
            return string_1.string.is(u) && (!u.includes("\n"));
        }
        line.is = is;
        function assert(u) {
            string_1.string.assert(u);
            if (u.includes("\n")) {
                throw new FoundatsionError(`Could not assert for ${this.name} because the the string`, `${text_1.text.show(u)} includes a newline!`);
            }
        }
        line.assert = assert;
        /** turns \n into "\\n" */
        function escape_string(s) {
            return s.replace(/\n/g, "\\n");
        }
        line.escape_string = escape_string;
        function split_into(s) {
            return s.split("\n");
        }
        line.split_into = split_into;
        line.wrap = unsound_1.unsound.shut_up(text_1.text.wrap);
    })(line = FoundatsionError.line || (FoundatsionError.line = {}));
    let passage;
    (function (passage) {
        passage.name = "FoundatsionError.passage";
        function is(u) {
            if (Array.isArray(u)) {
                return u.every(is);
            }
            else {
                return line.is(u);
            }
        }
        passage.is = is;
        function assert(u) {
            // honestly, I don't really know if this is any better for performance
            // but I'm mostly doing it for the error message
            const stack = [u];
            while (stack.length > 0) {
                const last_e = stack.pop();
                try {
                    if (Array.isArray(last_e)) {
                        // push sub array to back in reverse
                        // let's imagine you have a passage like so
                        // [[a, b, c], d]
                        // let's examine the stack at each loop
                        /* loop n
                           bottom
                           middle
                           top <- next
                        */
                        /* loop 0
                           [[a, b, c], d] <- next
                        */
                        /* loop 1
                           d
                           [a, b, c] <- next
                        */
                        /* loop 2
                           d
                           c
                           b
                           a <- next
                        */
                        // etc...
                        // since our stack uses the last element of the array as the
                        // top, we need to do it like this.
                        // notice how the elements are asserted in depth first order.
                        for (let i = last_e.length; i-- > 0;) {
                            stack.push(last_e[i]);
                        }
                    }
                    else {
                        line.assert(last_e);
                    }
                }
                catch (e) {
                    if (e instanceof Error) {
                        throw new FoundatsionError(`Error while asserting for ${this.name} at depth=${stack.length}`, e);
                    }
                    else {
                        throw e;
                    }
                }
            }
        }
        passage.assert = assert;
        passage.default_line_wrap = 80;
        function cast_to_lines(l, line_length = passage.default_line_wrap) {
            if (typeof l === "string") {
                return line.wrap(l, line_length);
            }
            else {
                const lines = [];
                for (const sub of l) {
                    // remove two characters because of the "> "
                    for (const subsub of cast_to_lines(sub, line_length - 2)) {
                        lines.push(`> ${subsub}`);
                    }
                }
                return lines;
            }
        }
        passage.cast_to_lines = cast_to_lines;
    })(passage = FoundatsionError.passage || (FoundatsionError.passage = {}));
    let passages;
    (function (passages_1) {
        // incomplete rtti because I don't care
        function cast_to_string(passages) {
            if (passages.length === 0) {
                return "";
            }
            else {
                const lines = passage.cast_to_lines(passages, 80);
                return `\n${lines.join("\n")}`;
            }
        }
        passages_1.cast_to_string = cast_to_string;
    })(passages = FoundatsionError.passages || (FoundatsionError.passages = {}));
})(FoundatsionError = exports.FoundatsionError || (exports.FoundatsionError = {}));
