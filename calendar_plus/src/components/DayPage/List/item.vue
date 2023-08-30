<template>
    <div class="item-wrap">
        <span class="item-title">{{ titleMapping[title] }}</span>
        <span class="item-value">{{ value }}</span>
    </div>
</template>

<script >
export default {
    name: 'ListItem',
    props: {
        title: String,
        value: String
    },
    setup() {
        const titleMapping = {
            "animalsYear": "生肖",
            "weekday": "星期",
            "lunarYear": "干支",
            "lunar": "农历",
            "year-month": "月份",
            "date": "日期",
            "suit": "宜",
            "avoid": "忌",
            "holiday": "假期",
            "desc": "摘要"
        }

        return {
            titleMapping
        }
    }
}
</script>

<style lang='scss' scoped>
.item-wrap {
    width: 100%;
    display: flex;
    // padding: 10px;
    min-height: 45px;

    align-items: center;
    max-height: 100px;
    border: 1px solid orangered;
    border-radius: 30px;
    margin-bottom: 10px;
    gap: 10px;
    flex: auto 3;

    .item-title {
        width: 120px;
        min-height: 45px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        line-height: 45px;
        text-align: center;
        background-color: orangered;
        color: #f1f1f1;
    }

    .item.value {
        // width: 100%;

        text-align: center;

    }
}
</style>