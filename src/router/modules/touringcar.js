import Layout from '@/layout'

const touringCarRouter = {
  path: '/car',
  component: Layout,
  meta: {
    title: '房车',
    icon: 'tubiao',
    roles: ['营地管理员', '道闸管理员', '超级管理员']
  },
  hidden: true,
  children: [
    {
      path: '',
      component: () => import('@/views/touringcar/index'),
      meta: {
        title: '房车',
        icon: 'tubiao',
        breadcrumb: false
      }
    }
  ]
}

export default touringCarRouter
