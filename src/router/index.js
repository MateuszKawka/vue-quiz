import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import {HOME_ROUTE, GAME_ROUTE, ENDGAME_ROUTE} from "./routes"

Vue.use(VueRouter)

const routes = [
  {
    path: HOME_ROUTE.path,
    name: HOME_ROUTE.name,
    component: Home
  },
  {
    path: GAME_ROUTE.path,
    name: GAME_ROUTE.name,
    component: () => import(/* webpackChunkName: "game" */ '../views/Game.vue')
  },
  {
    path: ENDGAME_ROUTE.path,
    name: ENDGAME_ROUTE.name,
    component: () => import('../views/EndGame.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
