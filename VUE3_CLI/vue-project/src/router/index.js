import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// 导航被触发。
// 在失活的组件里调用 beforeRouteLeave 守卫。
// 调用全局的 beforeEach 守卫。
// 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。
// 在路由配置里调用 beforeEnter。
// 解析异步路由组件。
// 在被激活的组件里调用 beforeRouteEnter。
// 调用全局的 beforeResolve 守卫(2.5+)。
// 导航被确认。
// 调用全局的 afterEach 钩子。
// 触发 DOM 更新。
// 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。


function removeQueryParams(to) {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // 路由配置上定义 beforeEnter 守卫
    //beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发。
    beforeEnter: (to, from) => {
      console.log('before into home route');
    },


  },
  {
    path: '/router/:path',
    name: 'RouterLearn',
    component: () => import('../views/RouterLearn.vue'),
    //可以将一个函数数组传递给 beforeEnter，这在为不同的路由重用守卫时很有用
    beforeEnter: [removeQueryParams, removeHash],
  },
  {
    path: '/routerguard',
    name: 'RouterGuard',
    component: () => import('../views/RouterGuard.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('../views/Watch.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('../views/Weather.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('../views/Weather.vue')
  },
  {
    path: '/note',
    name: 'Note',
    component: () => import('../views/Note.vue')
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//router.beforeEach 注册一个全局前置守卫
//当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于等待中。
//to: 即将要进入的目标
//from: 当前导航正要离开的路由
let isAuthenticated = true;

router.beforeEach((to, from) => {
  let date = new Date().getTime();

  console.log(`beforeEach`, `:${date}`, to.name);
  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // // ❗️ 避免无限重定向
    to.name !== 'Login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'Login' }
  }
})

//router.beforeResolve 注册一个全局守卫，它在每次导航时都会触发
//解析守卫刚好会在导航被确认之前、所有组件内守卫和异步路由组件被解析之后调用
//router.beforeResolve 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。
router.beforeResolve(async to => {
  let date = new Date().getTime();
  // router.push('/login')
  console.log('beforeResolve', `:${date}`);
})


//router.afterEach注册全局后置钩子，这些钩子不会接受 next 函数也不会改变导航本身
//它们对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。
router.afterEach((to, from) => {
  let date = new Date().getTime();
  console.log('afterEach', `:${date}`);
})

export default router
