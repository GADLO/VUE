<template>
    <!-- 组件模版 -->
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
// 组件逻辑
export default {
    name: 'App',
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}
</script>

<style lang='scss'>
// 组件样式
</style>