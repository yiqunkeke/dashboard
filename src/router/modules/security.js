import Layout from '@/layout'

const securityRouter = {
  path: '/security',
  component: Layout,
  meta: {
    title: '安防系统',
    icon: 'anfangguanli',
    roles: ['营地管理员', '道闸管理员', '超级管理员']
  },
  children: [
    {
      path: '',
      component: function (resolve) {
        require(['@/views/security/index'], resolve)
      },
      meta: {
        title: '安防系统',
        icon: 'anfangguanli',
        breadcrumb: false
      }
    }
  ]
}

export default securityRouter
