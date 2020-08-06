import Layout from '@/layout'

const operationRouter = {
  path: '/operation',
  component: Layout,
  meta: {
    title: '运维管理',
    icon: 'shezhi',
    roles: ['营地管理员', '道闸管理员', '超级管理员']
  },
  children: [
    {
      path: '',
      component: function (resolve) {
        require(['@/views/operation/index'], resolve)
      },
      meta: {
        title: '运维管理',
        icon: 'shezhi',
        breadcrumb: false
      }
    }
  ]
}

export default operationRouter
