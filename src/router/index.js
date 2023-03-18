import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repos',
      name: 'repos',
      component: () => import('../views/ReposView/ReposView.vue'),
      children: [
        {
          path: ':repoName',
          name: 'repo-details',
          component: () => import('../views/RepoDetailsView/RepoDetailsView.vue')
        }
      ]
    },
    
  ]
})

export default router
