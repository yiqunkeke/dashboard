import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
// import router from '@/router'

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const isPrivate = config.url.includes('private')
  const userToken = store.getters.token
  const userId = store.getters.userId
  const systemCode = store.getters.systemCode
  if (isPrivate) {
    if (userToken && userId && systemCode) {
      config.headers.userToken = userToken
      config.headers.userId = userId
      config.headers.systemCode = systemCode
    }
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log(error) // for debug
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { status, data } = response
  if (status !== 200) {
    // 请求未到达服务端
    Message({
      message: '请求错误',
      type: 'error',
      duration: 3 * 1000
    })
  } else {
    const { statusCode, message } = data
    const content = data.data
    if (statusCode === 200) {
      return content
    } else {
      Message({
        message: message,
        type: 'error',
        duration: 3 * 1000
      })
    }
  }
}, function (error) {
  // 对响应错误做点什么
  // const errorResp = error.response
  // const errorStatus = errorResp.status
  // const errorMessage = errorResp.data.message
  // switch (errorStatus) {
  //   case 400:
  //     Message({
  //       message: errorMessage,
  //       type: 'error',
  //       duration: 3 * 1000
  //     })
  //     break
  //   case 401:
  //     store.dispatch('logout')
  //       .then(() => {
  //         router.replace({
  //           path: '/login'
  //         })
  //         location.reload()
  //       })
  //     break
  //   case 403:
  //     Message({
  //       message: '对不起，您没有权限',
  //       type: 'error',
  //       duration: 3 * 1000
  //     })
  //     break
  //   case 404:
  //     router.replace({
  //       path: '/404'
  //     })
  //     break
  //   case 500:
  //     Message({
  //       message: errorMessage,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     break
  //   default:
  //     Message({
  //       message: errorMessage,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  // }
  return Promise.reject(error)
})

export default service
