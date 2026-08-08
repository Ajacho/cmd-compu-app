import { createRouter, createWebHistory } from 'vue-router'

import MenuView from '../views/MenuView.vue'
import LearnView from '../views/LearnView.vue'
import GamesView from '../views/GamesView.vue'

const routes = [
  {
    path: '/',
    component: MenuView
  },
  {
    path: '/learn',
    component: LearnView
  },
  {
    path: '/games',
    component: GamesView
  }
]

const router = createRouter({
  // Use the HTML5 history because we are deploying to GitHub Pages, which does not support hash-based routing
history: createWebHistory(import.meta.env.BASE_URL),

  routes
})

export default router