<template>
    <div>routerlearn</div>
</template>

<script >
import { useRoute, useRouter } from 'vue-router';

export default {
    name: 'RouterLearn',
    setup() {
        const route = useRoute(),
            router = useRouter();
        // 想要导航到不同的 URL，可以使用 router.push 方法。
        // router.push('/')
        // 当你点击 <router-link> 时，内部会调用这个方法，所以点击 <router-link :to="..."> 相当于调用 router.push(...)


        // const push = {
        //     // 字符串路径
        //     1: router.push('/users/eduardo'),

        //     // 带有路径的对象
        //     2: router.push({ path: '/users/eduardo' }),

        //     // 命名的路由，并加上参数，让路由建立 url
        //     3: router.push({ name: 'user', params: { username: 'eduardo' } }),

        //     // 带查询参数，结果是 /register?plan=private
        //     4: router.push({ path: '/register', query: { plan: 'private' } }),

        //     // 带 hash，结果是 /about#team
        //     5: router.push({ path: '/about', hash: '#team' }),
        // }


        // const replace = {
        //     1: router.push({ path: '/home', replace: true }),
        //     // 相当于
        //     2: router.replace({ path: '/home' })
        // }

        const redirect = {
            1: { path: '/home', redirect: '/' },
            2: { path: '/home', redirect: { name: 'homepage' } },
            3: {
                // /search/screens -> /search?q=screens
                path: '/search/:searchText',
                redirect: to => {
                    // 方法接收目标路由作为参数
                    // return 重定向的字符串路径/路径对象
                    return { path: '/search', query: { q: to.params.searchText } }
                },
            },
        }



    }
}
</script>

<style lang='scss' scoped></style>