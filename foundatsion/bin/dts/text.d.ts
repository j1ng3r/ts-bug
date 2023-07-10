export declare namespace text {
    function wrap(s: string, length: number): string[];
    /**
     * Whenever you're printing something from the user, you should probably just
     * use this.
     *
     * Don't plug `typeof x` into this, that'd be silly.
     */
    function show(u: unknown): string;
}
