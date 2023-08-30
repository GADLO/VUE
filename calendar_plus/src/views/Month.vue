<template>
    <div class="container">
        <month-card v-for="item in data" :data="item" key="item.desc" cardType="month"></month-card>
    </div>
</template>

<script  >
import MonthCard from '@/components/MonthPage/Card.vue'
import getdata from '@/services'
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { getNowDate } from '@/libs/utils'


export default {
    name: 'MonthPage',
    components: {
        MonthCard
    },
    setup() {
        const store = useStore(),
            data = store.state.monthData;

        onMounted(() => {
            getdata(store, 'month', getNowDate('month'));
            console.log('data', getNowDate('month'))
        })

        return {
            data
        }

    }
}

</script>

<style lang='scss' scoped>
.container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
}
</style>