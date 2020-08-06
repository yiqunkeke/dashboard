import router from '.'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/page-title'
import { getToken } from '@/utils/token'
import store from '../store'
import { Message } from 'element-ui'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  NProgress.start() // start progress bar

  document.title = getPageTitle(to.meta.title) // set page title

  const hasToken = getToken() // determin whether the user has logged in

  /**
     * 判断是否有 token
     * 1.如果有token
     *  2.如果是登录，直接过
     *  3.如果不是登录...
     * 4.如果没有token
     *  5.在白名单，直接过
     *  6.否则，去登录界面
     */

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next('/')
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        try {
          store.dispatch('getInfo').then(res => {
            const { listRoles } = res
            // 提取角色
            const roles = []
            listRoles.forEach(item => {
              roles.push(item.roleName)
            })
            // console.log('roles', roles)
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              router.addRoutes(store.getters.addRouters)
              next({ ...to, replace: true })
            })
          })
          next()
        } catch (err) {
          await store.dispatch('resetToken')
          Message.error('没有权限，请重新登录')
          next('/login')
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    // has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
