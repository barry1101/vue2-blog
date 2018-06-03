import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Articles from '../views/Articles'
import Dynamics from '../views/Dynamics'
import About from '../views/About'
import Search from '../views/Search'
import Article from '../views/Article'
import Sign from '../views/Sign'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      alias: '首页'
    },
    {
      path: '/articles',
      component: Articles,
      alias: '文章'
    },
    {
      path: '/articles/:id',
      name: 'Article',
      component: Article,
      props: true
    },
    {
      path: '/dynamics',
      component: Dynamics,
      alias: '动态'
    },
    {
      path: '/about',
      component: About,
      alias: '关于'
    },
    {
      path: '/search/:keyword',
      name: 'Search',
      component: Search,
      props: true
    },
    {
      path: '/sign',
      component: Sign
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
