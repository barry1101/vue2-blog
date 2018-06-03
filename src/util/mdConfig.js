import Marked from "marked";
import "highlight.js/styles/github-gist.css";

// markdown 配置
Marked.setOptions({
    renderer: new Marked.Renderer(),
    highlight: function (code) {
        return require("highlight.js").highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

export default Marked