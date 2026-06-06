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
  history: createWebHistory(),
  routes
})

export default router