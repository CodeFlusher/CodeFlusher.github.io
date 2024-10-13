import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EncodesView from '../views/EncodeView.vue'
import RLEncodeView from '@/views/RLEncodeView.vue'
import AboutView from '@/views/AboutView.vue'
import PageNotFound from '@/views/PageNotFound.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home2',
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
    },
    { 
      path: "/*",
      name:"404 Not Found",
      component: PageNotFound 
    },
    { 
      path: "/404",
      name:"404 Not Found",
      component: PageNotFound 
    }
  ]
})

router.beforeEach(item=>{
  if(item.path === '/'){
    return
  }
  if(!router.hasRoute(item.name as string)){
    router.push("/404")
  }
})

export default router
