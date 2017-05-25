import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/auth/oauth/{provider}/callback',
      component: {
        template: '<div class="auth-component"></div>'
      }
    }
  ]
})
