import Vue from 'vue'

console.log(Vue)

export default function addRouteGuards (router) {
  router.beforeEach((to, from, next) => {
    console.log(router)
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!router.app.$apiArchitect.getters['auth/getIsAuthenticated']) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
}
