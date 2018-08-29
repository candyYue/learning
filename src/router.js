import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = r => require.ensure([], () => r(require('./views')), 'HelloWorld')
const D3 = r => require.ensure([], () => r(require('./views/D3')), 'D3')
const Model = r => require.ensure([], () => r(require('./views/Model')), 'Model')
const ES = r => require.ensure([], () => r(require('./views/ES')), 'ES')

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [
        {
          path: '/HelloWorld/D3',
          component: D3,
          name: 'Hello-D3'
        },
        {
          path: '/HelloWorld/Model',
          component: Model,
          name: 'Hello-Model'
        },
        {
          path: '/HelloWorld/ES',
          component: ES,
          name: 'Hello-ES'
        }
      ],
    //   redirect: '/HelloWorld/child'
    },
    {
      path: '*',
      redirect: '/HelloWorld'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.edit) {
    const opts = {...from.query}
    for (const opt in opts) {
      to.meta[opt] = opts[opt]
    }
  }
  next()
})

export default router
