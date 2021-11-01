import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Button.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../views/Modal.vue'),
    children: [
      {
        path: '',
        name: 'ModalNormal',
        component: () => import('../views/Modal/index.vue')
      },
      {
        path: 'withjq',
        name: 'WithJQ',
        component: () => import('../views/Modal/withJQ.vue')
      }
    ]
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: ()=> import('../views/Collapse.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
