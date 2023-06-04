import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Usuarios.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'autenticacao',
    component: () => import('../views/Autenticacao.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Usuarios.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
