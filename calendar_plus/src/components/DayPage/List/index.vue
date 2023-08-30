<template>
    <div class="list-wrap">
        <list-item v-for="(item, ind) in titleArr" :title="item" :value="data[item]" :key="ind + item"></list-item>
    </div>
</template>

<script >
import ListItem from './item.vue';
import { useStore } from 'vuex';

export default {
    name: 'List',
    components: {
        ListItem
    },
    setup() {
        const store = useStore(),
            state = store.state,
            data = state.dayData;
        let titleArr = Object.keys(data);

        // console.log(data);

        return {
            titleArr,
            data
        }
    }
}
</script>

<style lang='scss' scoped>
.list-wrap {
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>