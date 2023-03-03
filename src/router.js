import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('./components/Register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./components/Login.vue')
    },
  ]
})

export default router


