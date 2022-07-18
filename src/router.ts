import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import { reportPV } from '@/services/api'

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

router.beforeEach((to) => {
  let spmC = ''
  if (to.path === '/') {
    spmC = 'home'
  } else {
    const baseSpmC = to.path.split('/')
    if (baseSpmC[0] === '') {
      baseSpmC.shift()
    }
    const end = baseSpmC[baseSpmC.length - 1]
    const n = Number(end)
    if (!isNaN(n) && n !== 404) {
      baseSpmC.pop()
    }
    spmC = baseSpmC.join('-')
  }
  const year = new Date().getFullYear()
  let month: string|number = new Date().getMonth() + 1
  let day: string|number = new Date().getDate()

  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  const params = {
    setDate: `${year}/${month}/${day}`,
    spm: `smpc.anlan-search.${spmC}`
  }
  reportPV(params)
})
