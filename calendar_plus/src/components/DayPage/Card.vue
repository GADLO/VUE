<template>
    <div class="card">
        <div class="header">
            <span class="weekday">{{ weekday }}</span>
        </div>
        <h1 class="text lunar">{{ lunar }}</h1>
        <h2 class="text date">{{ date }}</h2>
    </div>
</template>

<script >
export default {
    name: 'Card',
    props: {
        data: Object
    },
    setup(props) {
        const weekday = props.data.weekday,
            lunar = props.data.lunar,
            date = props.data.date

        return {
            weekday,
            lunar,
            date
        }
    }
}
</script>

<style lang='scss' scoped>
.card {
    width: 90%;
    height: 30%;
    margin: 10px;
    color: #fff;
    border-radius: 20px;
    box-shadow: 0px 1px 10px #cb8297;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);
    position: relative;

    .header {
        width: 100%;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>