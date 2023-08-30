<template>
    <header class="my-header">
        <h1>
            <slot></slot>
        </h1>
    </header>
</template>

<script >

</script>

<style lang='scss' scoped>
.my-header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orangered;
    color: #fff;
    width: 100%;
    height: 60px;
    z-index: 1000;
}
</style>