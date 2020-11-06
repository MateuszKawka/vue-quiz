import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import {HOME_ROUTE, GAME_ROUTE} from "./routes"

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "game" */ '../views/Game.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
