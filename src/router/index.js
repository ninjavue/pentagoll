import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( /* webpackChunkName: "admin" */ '../views/AdminView.vue')
  },
  {
    path: '/admin/match',
    name: 'adminMatch',
    component: () => import( /* webpackChunkName: "admin" */ '../views/AdminMatch.vue')
  },
  {
    path: '/admin/subject',
    name: 'admin/Subject',
    component: () => import( /* webpackChunkName: "admin" */ '../views/AdminSubject.vue')
  },
  {
    path: '/*',
    name: 'pageNotFound',
    component: () => import( /* webpackChunkName: "admin" */ '../views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router