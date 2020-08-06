import Layout from '@/layout'

const comprehensiveRouter = {
  path: '/compre',
  component: Layout,
  meta: {
    title: '综合态势',
    icon: 'tubiao',
    roles: ['营地管理员','道闸管理员','超级管理员']
  },
  children: [
    {
      path: '',
      component: () => import('@/views/comprehensive/index'),
      meta: {
        title: '综合态势',
        icon: 'tubiao',
        breadcrumb: false
      }
    }
  ]
}

export default comprehensiveRouter
