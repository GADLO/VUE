<template>
    <div class="container">
        <day-card :data="dayData"></day-card>
        <List />
    </div>
</template>

<script>
import DayCard from '@/components/DayPage/Card.vue'
import List from '@/components/DayPage/List'
import getdata from '@/services'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { getNowDate } from '@/libs/utils'

export default {
    name: 'DayPage',
    components: {
        DayCard,
        List
    },
    setup() {

        const store = useStore(),
            state = store.state;

        onMounted(() => {
            getdata(store, 'day', getNowDate('day'));
            console.log(state.dayData);
        })


        return computed(() => state).value;

    }
}

</script>

<style lang='scss' scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
    overflow: auto;
}
</style>