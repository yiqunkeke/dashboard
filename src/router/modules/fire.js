import Layout from '@/layout'

const fireRouter = {
  path: '/fire',
  component: Layout,
  meta: {
    title: '消防系统',
    icon: 'xiaofang',
    roles: ['营地管理员', '道闸管理员', '超级管理员']
  },
  children: [
    {
      path: '',
      component: function (resolve) {
        require(['@/views/fire/index'], resolve)
      },
      meta: {
        title: '消防系统',
        icon: 'xiaofang',
        breadcrumb: false
      }
    }
  ]
}

export default fireRouter
