import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Phone1View from '../views/Phone1View.vue'
import Phone2View from '../views/Phone2View.vue'
import Phone3View from '../views/Phone3View.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/phone1',
    name: 'phone1',
    component: Phone1View
  },
  {
    path: '/phone2',
    name: 'phone2',
    component: Phone2View
  },
  {
    path: '/phone3',
    name: 'phone3',
    component: Phone3View
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
