import { FoundatsionError } from "./error";
export var text;
(function (text) {
    function wrap(s, length) {
        const lines = [];
        const r = new RegExp(`(.{1,${length}})(?:\\s|$)`, "g");
        for (const [, capture_group] of s.matchAll(r)) {
            if (capture_group == null) {
                throw new FoundatsionError(`Called wrap ${length} but internal regex capture group was null.`);
            }
            lines.push(capture_group);
        }
        return lines;
    }
    text.wrap = wrap;
    /**
     * Whenever you're printing something from the user, you should probably just
     * use this.
     *
     * Don't plug `typeof x` into this, that'd be silly.
     */
    function show(u) {
        switch (typeof u) {
            case "bigint": return `${u}n`;
            case "boolean": return `${u}`;
            case "number": return `${u}`;
            case "string": return JSON.stringify(u);
            case "symbol": return `Symbol(${show(u.description)})`;
            case "undefined": return "undefined";
            case "function": return `function ${u.name}(...)`;
            case "object":
                if (Array.isArray(u)) {
                    return `[${u.map(show).join(", ")}]`;
                }
                else if (u === null) {
                    return "null";
                }
                else {
                    return "object";
                }
        }
    }
    text.show = show;
})(text || (text = {}));
