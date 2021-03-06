import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/BlogHome.vue'

const knowyourlimits = () => import('./components/knowyourlimits/main.vue')
const limitsDetails = () => import('./components/limitsDetails/main.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/knowyourlimits', component: knowyourlimits },
    { path: '/limitsdetails', component: limitsDetails }
  ]
})
