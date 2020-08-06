import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/token'
import { resetRouter } from '@/router'
import { setStorage, getStorage, clearStorage } from '@/utils/storage'
import md5 from 'js-md5'

const getDefaultState = () => {
  return {
    token: getToken(),
    userId: getStorage('userId'), // 用户id
    systemName: getStorage('systemName'), // 营地名称
    systemCode: getStorage('systemCode'), // 营地号
    username: '', // 用户名
    roles: [] // 角色
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_ID: (state, userId) => {
    state.userId = userId
  },
  SET_SYSTEM_NAME: (state, systemName) => {
    state.systemName = systemName
  },
  SET_SYSTEM_CODE: (state, systemCode) => {
    state.systemCode = systemCode
  },
  SET_USER_NAME: (state, username) => {
    state.username = username
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {

  // 登录-获取token
  login ({ commit }, { systemCode, userName, password }) {
    const pwd = md5(password)
    return new Promise((resolve, reject) => {
      login(systemCode, userName, pwd )
        .then(res => {
          console.log('login',res)
          const { userToken, userId, systemName, systemCode } = res
          commit('SET_TOKEN', userToken)
          commit('SET_USER_ID', userId)
          commit('SET_SYSTEM_NAME', systemName)
          commit('SET_SYSTEM_CODE', systemCode)

          setToken(userToken)
          setStorage('userId', userId)
          setStorage('systemName', systemName)
          setStorage('systemCode', systemCode)
          
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  // 用户信息
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      // userId, userToken, systemCode
      getInfo(state.userId, state.token, state.systemCode).then(res => {
        const { email, listPrivileges, listRoles, phone, systemCode, userName } = res
        console.log('userinfo', res)
        commit('SET_USER_NAME', userName)
        // 提取角色
        const roles = []
        listRoles.forEach(item => {
          roles.push(item.roleName)
        })
        // console.log(roles)
        commit('SET_ROLES', roles)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },

  // 前端登出
  logout ({ commit }) {
    return new Promise(resolve => {
      removeToken()
      clearStorage()
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove token first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
