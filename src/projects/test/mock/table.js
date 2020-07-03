import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

const navList = [{
  path: '/form',
  component: 'Layout',
  children: [
    {
      path: 'index',
      name: 'Form',
      component: 'form/index',
      meta: { title: 'Form', icon: 'form' }
    }
  ]
}, {
  path: '/nested',
  component: 'Layout',
  redirect: '/nested/menu1',
  name: 'Nested',
  meta: {
    title: 'Nested',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      component: 'nested/menu1/index',
      redirect: '/nested/menu1/menu1-1',
      name: 'Menu1',
      meta: { title: 'Menu1' },
      children: [
        {
          path: 'menu1-1',
          component: 'nested/menu1/menu1-1',
          name: 'Menu1-1',
          meta: { title: 'Menu1-1' }
        },
        {
          path: 'menu1-2',
          component: 'nested/menu1/menu1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          name: 'Menu1-2',
          meta: { title: 'Menu1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: 'nested/menu1/menu1-2/menu1-2-1',
              name: 'Menu1-2-1',
              meta: { title: 'Menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: 'nested/menu1/menu1-2/menu1-2-2',
              name: 'Menu1-2-2',
              meta: { title: 'Menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: 'nested/menu1/menu1-3',
          name: 'Menu1-3',
          meta: { title: 'Menu1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      component: 'nested/menu2/index',
      name: 'Menu2',
      meta: { title: 'menu2' }
    }
  ]
}]
const navList1 = []

export default [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/table/getNavList',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          obj: navList,
          msg: 'ok'
        }
      }
    }
  }
]
