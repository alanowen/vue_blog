import 'highlightjs/styles/tomorrow.css';
import Hljs from 'highlightjs/highlight.pack.min.js';

let Highlight = {}

Highlight.install = function (Vue, options) {
    Vue.directive('highlight', function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block) => {
            Hljs.highlightBlock(block)
        })
    })
}
export default Highlight