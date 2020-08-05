import { constantRoutes, asyncRouter } from '@/router'

function hasPermission (roles, route) {
  // roles 是 getInfo接口 返回的角色
  // route 是 当前路由
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

function filterAsyncRouter (asyncRouterMap, roles) {
  return asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
}

const permission = {
  state: {
    addRouters: [],
    routers: constantRoutes
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRoutes.concat(routers)
      console.log('addRouters', routers)
      console.log('routers', state.routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const roles = data.roles
        const accessedRouters = filterAsyncRouter(asyncRouter, roles)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
