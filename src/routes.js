import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import PasswordReset from './components/auth/PasswordReset'
import AccountEdit from './components/user/AccountEdit'
import Version from './components/ping/Version'

const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/password/reset',
      name: 'PasswordReset',
      component: PasswordReset
    },
    {
      path: '/user/account/edit',
      name: 'AccountEdit',
      component: AccountEdit
    },
    {
      path: '/settings/version',
      name: 'SettingsVersion',
      component: Version,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth/oauth/{provider}/callback',
      component: {
        template: '<div class="auth-component"></div>'
      }
    }
]

export default routes
