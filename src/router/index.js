import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store/index";
import {HOME_ROUTE, GAME_ROUTE, ENDGAME_ROUTE, HIGHSCORES_ROUTE} from "./routes"
import {INIT_GLOBAL_STATE} from "../store/mutations.types";

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
  },
  {
    path: HIGHSCORES_ROUTE.path,
    name: HIGHSCORES_ROUTE.name,
    component: () => import('../views/Highscores.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.name === HOME_ROUTE.name) {
    store.commit(INIT_GLOBAL_STATE)
  }
  next()
})

export default router
