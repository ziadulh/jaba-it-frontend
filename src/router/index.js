import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import Login from '../views/login/login';
import Dashboard from '../views/dashboard';
import About from '../views/About';
import Posts from '../views/posts';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {path: 'about',
      name: 'About',
      component: About},
      {path: 'posts',
      name: 'Posts',
      component: Posts}
    ]
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
