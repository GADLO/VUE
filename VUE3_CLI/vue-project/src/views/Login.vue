<template>
    <input type="text" placeholder="请输入" name="username">
    <br />
    <input type="text" placeholder="" name="password">


    <!-- 异步提交表单 -->
    <!-- onsubmit只认布尔值 -->
    <!-- 先执行onsubmit里面的内容，再去执行默认表单里提交的内容，如果onsubmit里面的内容返回false，那么表单提交会被中断 -->
    <form action="default" method="post">
        <input type="text" placeholder="请输入" name="username">
        <br />
        <input type="text" placeholder="" name="password">
        <br>
        <button type="submit" @click="submitForm()">提交</button>
    </form>
</template>

<script >
export default {
    name: '',
    setup() {
        function submitForm() {
            console.log(1);
        }

        return {
            submitForm
        }
    }
}
</script>

<style lang='scss' scoped></style>