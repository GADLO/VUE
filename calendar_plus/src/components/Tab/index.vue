<template>
    <div class="tab">
        <div class="tab-item" v-for="(item, ind) in tabData" :key="ind">
            <TabIcon :iconText="item.iconText" :tabText="item.tabText" :path="item.path" @click="fetchData"></TabIcon>
        </div>
    </div>
</template>

<script>
import TabIcon from './TabIcon.vue'
import tabData from '@/data/tab.js'
import getdata from '@/services'
import { computed, onMounted, reactive } from 'vue';
import { useStore } from 'vuex';
import { getNowDate, } from '@/libs/utils'

export default {
    name: 'Tab',
    components: { TabIcon }

    ,
    setup() {
        const state = reactive({
            tabData
        })

        function fetchData() {
            getdata(store, 'day', getNowDate('day'));

        }

        // console.log(state);
        return {
            ...state
        }
    }
}
</script>

<style lang='scss' scoped>
.tab {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
        text-decoration: none;
        color: #000;
    }
}
</style>