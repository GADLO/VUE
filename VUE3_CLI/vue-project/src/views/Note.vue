<template>
    <marked-template :markdown="markdown"></marked-template>
</template>

<script >
import MarkedTemplate from '../components/marked/MarkedTemplate.vue';

// import { markdownToStr } from '../utils/mdToStr'

export default {
    name: 'Note',
    components: {
        MarkedTemplate
    },
    setup() {
        const markdown = '# DeepClone';

        var obj = {
            name: 'JavaScript',
            age: 28,
            info: {
                author: 'Brendan Eich',
                company: 'Netscape and Sun',
                type: 'script language',
                version: ['ECMAScript 1.0(1997)', 'ECMAScript 2.0(1998)', 'ECMAScript 3.0(1999)', 'ECMAScript      1.0(2009)', {
                    ES6: 2015,
                    ES_year: 'launch year is the version'
                }],
                reference: {
                    AxelRauschmayer: 'The Past, Present, and Future of JavaScript',
                    JohnDalziel: 'The race for speed part 4: The future for JavaScript',
                    AxelRauschmayer: 'Basic JavaScript for the impatient programmer',
                    balenaIo: 'Happy 18th Birthday JavaScript! A look at an unlikely past and bright future'
                }
            }
        }

        function deepClone(origin, target) {
            var tar = target || {};
            var toStr = Object.prototype.toString; //使用对象原型上面的toString方法去输出字符串
            var arrType = '[object Array]';

            for (var k in origin) {
                //判断k是不是origin自己的属性，for..in也会枚举继承下来的可迭代属性
                if (origin.hasOwnProperty(k)) {

                    //判断k是对象以及不为空
                    if (typeof origin[k] === 'object' && origin[k] !== null) {
                        tar[k] = toStr.call(origin[k]) === arrType ? [] : {};

                        //使用递归拷贝深层对象或数组
                        deepClone(origin[k], tar[k]);
                    } else {
                        tar[k] = origin[k];
                    }
                }
            }

            return tar
        }

        const newObj = deepClone(obj, {})

        console.log(obj, newObj);

        return {
            markdown
        }
    }
}
</script>

<style lang='scss' scoped></style>