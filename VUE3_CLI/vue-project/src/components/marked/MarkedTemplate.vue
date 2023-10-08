<template>
    <div v-html="html"></div>
</template>

<script >
import { marked } from 'marked';
import highlight from 'highlight.js'

export default {
    name: 'MarkedTemplate',
    props: ['markdown'],
    setup(props) {

        marked.setOptions({
            highlight: function (code) {
                return highlight.highlightAuto(code).value;
            }
        })

        const html = marked(props.markdown);

        return {
            html
        }
    }
}
</script>

<style lang='scss' scoped></style>