<template>
    <div class="card" v-if="cardType === 'month'">

        <div class="header">
            <span class="date">{{ festival }}</span>
        </div>
        <h1 class="text festival">{{ name }}</h1>
        <p class="text date">{{ desc }}</p>
    </div>
    <div class="card" v-if="cardType === 'year'">
        <div class="header">
            <span class="date">{{ startDay }}</span>
        </div>
        <h1 class="text festival">{{ name }}</h1>
        <p class="text date">{{ desc }}</p>
    </div>
</template>

<script >
export default {
    name: 'Card',
    props: {
        data: Object,
        cardType: String
    },
    setup(props) {
        // console.log(props);
        const name = props.data.name,
            festival = props.data.festival,
            desc = props.data.desc,
            startDay = props.data.startday


        return {
            name,
            festival,
            desc,
            startDay
        }
    }
}
</script>

<style lang='scss' scoped>
.card {
    width: 90%;
    height: 30%;
    margin: 10px;

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

    .text {
        color: #fff;
    }

    .festival {
        color: orangered
    }


}
</style>