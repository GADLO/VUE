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
    path: '/router',
    name: 'Router',
    component: () => import('@/views/Router.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
