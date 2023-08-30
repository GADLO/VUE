<template>
    <div class="search-wrap">
        <input type="text" :placeholder="placeholder" :maxlength="maxlength" v-model="inputValue"
            @input="searchData($even)">
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'SearchInput',
    props: {
        placeholder: String,
        maxlength: Number
    },
    setup(props) {
        const inputValue = ref(''),
            store = useStore(),
            state = store.state;


        const searchData = () => {

        }

        watch(inputValue, (inputValue) => {

            if (inputValue.length === state.maxlength) {

            }
            console.log(inputValue);
        })
        // console.log(this.placeholder);

        return {
            inputValue,
            searchData
        }
    }
}
</script>

<style lang='scss' scoped>
.search-wrap {
    // width: 100%;
    padding: 5px 10px;
    display: flex;
    justify-content: center;

    input {
        outline: none;
        border: 1px solid #ccc;
        border-radius: 20px;
        height: 35px;
        width: 100%;
        padding-left: 8px;
    }
}
</style>