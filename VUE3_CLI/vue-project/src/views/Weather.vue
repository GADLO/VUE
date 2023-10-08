<template>
    <el-container class="container">
        <el-header>
            <el-input placeholder="请输入" class="input" v-model="city">
                <template #prepend>城市：</template>
            </el-input>
        </el-header>
        <el-main class="main">
            <div class="today">
                今天：
                <span>{{ todayData.weather ?? plc }} {{ todayData.temperature ?? plc }}</span>
                <span> {{ todayData.direct ?? plc }} </span>
                <span>{{ todayData.date }}</span>
            </div>
            <div class="real">
                <span class="temp">{{ realtime.temperature ?? plc }}</span>
                <span class="realInfo">{{ realtime.info ?? plc }}</span>
                <span class="realInfo">{{ realtime.direct ?? plc }}</span>
                <span class="realInfo">{{ realtime.power ?? plc }}</span>
            </div>
            <div class="real">
                <span class="realInfo">空气质量：{{ realtime.aqi ?? plc }}</span>
                <span class="realInfo">湿度：{{ realtime.humidity ?? plc }}</span>
            </div>
            <div class="future">
                <div class="header">5日天气预报</div>
                <el-table :data="futureData">
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column prop="temperature" label="温度"></el-table-column>
                    <el-table-column prop="weather" label="天气"></el-table-column>
                    <el-table-column prop="direct" label="风向"></el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<script >
import { onMounted, ref } from 'vue';

export default {
    name: 'Weather',
    setup() {
        onMounted(() => { requestData() })

        const city = ref('广州'),
            weatherData = ref(''),
            todayData = ref(''),
            plc = ref('暂无数据'),
            realtime = ref({}),
            futureData = ref([]);

        function requestData() {
            let api = `simpleWeather/query?city=${city}&key=9811490bdf45662a68296c6aa9b74346`;

        }

        return {
            city,
            weatherData,
            todayData,
            plc,
            realtime,
            futureData
        }
    }
}
</script>

<style lang='scss' scoped>
.container {
    background-color: linear-gradient(rgb(13, 104, 188), rgb(54, 131, 195));
}

.input {
    width: 300px;
    margin-top: 20px;
}

.today {
    font-size: 20px;
    color: white;
}

.temp {
    font-size: 79px;
    color: white;
}

.realInfo {
    color: white;
}

.future {
    margin-top: 40px;
}

.header {
    color: white;
    font-size: 27px;
}
</style>