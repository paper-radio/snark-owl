import blessed from "blessed";

export default class {
    constructor() {
        this.screen = blessed.screen({
            smartCSR: true
        });

        // Quit on Escape, q, or Control-C.
        this.screen.key(["escape", "q", "C-c"], function(ch, key) {
            return process.exit(0);
        });
    }
}
