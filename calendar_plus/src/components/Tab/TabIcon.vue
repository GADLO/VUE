<template>
    <router-link :to="path">
        <div class="tab-icon">
            <span class="icon">{{ iconText }}</span>
            <span class="icon-text">{{ tabText }}</span>
        </div>
    </router-link>
</template>

<script >
export default {
    name: 'TabIcon',
    props: ['iconText', 'tabText', 'path']
}
</script>

<style lang='scss' scoped>
.router-link-active {



    .icon {
        background-color: orangered;
        color: #fff;
    }

    .icon-text {
        color: orangered
    }
}

.tab-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;



    .icon {
        border-radius: 50%;
        border: 2px solid orangered;
        width: 35px;
        height: 35px;
        font-size: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-text {
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
}
</style>