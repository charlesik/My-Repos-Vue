import { createRouter, createWebHistory } from 'vue-router'
import Mainpage from '@/views/Mainpage.vue'
import RepoDetails from '@/views/Mainpage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Mainpage,
      // children: [{path: "details/:name", component:RepoDetails}]

    },
    {
      path: '/details/:name',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ()=> import("@/views/RepoDetails.vue"),
    }
  ]
})

export default router
