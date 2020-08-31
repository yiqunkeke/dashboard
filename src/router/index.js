import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'
import comprehensiveRouter from './modules/comprehensive'
import fireRouter from './modules/fire'
import securityRouter from './modules/security'
import operationRouter from './modules/operation'
import touringCarRouter from './modules/touringcar'

Vue.use(VueRouter)

// 默认路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    meta: { title: '登录', icon: 'dashboard' }
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    hidden: true,
    component: layout,
    meta: { title: '首页', icon: 'dashboard' },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  }
]

// 权限路由
export const asyncRouter = [
  comprehensiveRouter,
  fireRouter,
  securityRouter,
  operationRouter,
  touringCarRouter
]

// https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
const createRouter = () => new VueRouter({
  mode: 'history', // history模式只支持前进，后退，跳转操作
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
