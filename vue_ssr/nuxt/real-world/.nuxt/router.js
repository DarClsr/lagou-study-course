import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d8571d7 = () => interopDefault(import('..\\pages' /* webpackChunkName: "" */))
const _554c3d10 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _7ba73232 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _07ca3e32 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _26999078 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _fa84ce8c = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _22d6fd02 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "",
    component: _7d8571d7,
    name: "home"
  }, {
    path: "/login",
    component: _554c3d10,
    name: "login"
  }, {
    path: "/register",
    component: _7ba73232,
    name: "register"
  }, {
    path: "/profile/:username",
    component: _07ca3e32,
    name: "profile"
  }, {
    path: "/editor",
    component: _26999078,
    name: "editor"
  }, {
    path: "/settings",
    component: _fa84ce8c,
    name: "settings"
  }, {
    path: "/article/:id",
    component: _22d6fd02,
    name: "article"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
