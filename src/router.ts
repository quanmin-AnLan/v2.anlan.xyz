import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: '404'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/404',
    name: '404',
    component: () => import('./views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
