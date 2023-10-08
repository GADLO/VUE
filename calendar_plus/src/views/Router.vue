<template>
    <div>
        <router-link to="/router/a">router</router-link>
    </div>
</template>

<script >
import { useRoute, useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter(),
            route = useRoute();

        console.log(route.params, 'route');
    }

}


</script>

<style lang='scss' scoped></style>