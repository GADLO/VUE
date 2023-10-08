import { marked } from 'marked';
import highlight from 'highlight.js'
import { readdirSync } from 'fs';

marked.setOptions({
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    }
})

function markdownToStr(fileName) {
    const arr = readdirSync('../markdown');

    return arr
}

export { markdownToStr }