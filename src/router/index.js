import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../utils/firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/ignisdancestudio',
    name: 'Ignis',
    component: () => import(/* webpackChunkName: "ignisdancestudio" */ '../views/Ignis.vue')
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "galeria" */ '../views/Galeria.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  },
  {
    path: '/panel',
    name:'Panel',
    meta:{
      requiresAuth:true
    },
    component: () => import(/* webpackChunkName: "panel" */ '../views/panel/Panel.vue')
  },
  {
    path: '/panel/login',
    name:'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/panel/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    const usuario = auth.currentUser;
    if(!usuario) {
      next({
        path:'/panel/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/*
*/

export default router
