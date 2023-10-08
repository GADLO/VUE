import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('@/App.vue')
  },
  {
    path: '/day',
    name: 'DayPage',
    component: () => import('@/views/Day.vue')
  },
  {
    path: '/year_month',
    name: 'MonthPage',
    component: () => import('@/views/Month.vue')
  },
  {
    path: '/year',
    name: 'YearPage',
    component: () => import('@/views/Year.vue')
  },
  {
    path: '/router/:id',
    name: 'Router',
    component: () => import('@/views/Router.vue')
  },
  {
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  // { path: '/user-:afterUser(.*)', component: UserGeneric },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
