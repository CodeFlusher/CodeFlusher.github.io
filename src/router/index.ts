import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EncodesView from '../views/EncodeView.vue'
import RLEncodeView from '@/views/RLEncodeView.vue'
import AboutView from '@/views/AboutView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/encode',
      name: 'encode',
      component: EncodesView
    },
    {
     path: "/about",
     name: "developer",
     component: AboutView
    },
    {
      path: '/rle',
      name: 'rle',
      component: RLEncodeView
    }
  ]
})

export default router
