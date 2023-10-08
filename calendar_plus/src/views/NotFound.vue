<template>
    <div>
        404 NOT FOUND! BACK TO <router-link to="/day">HOME!</router-link>
    </div>
</template>

<script >
import { useRoute } from "vue-router";

export default {
    name: 'NotFound',
    setup() {
        const route = useRoute();
        console.log('route', route.params);
    }
}
</script>

<style lang='scss' scoped></style>