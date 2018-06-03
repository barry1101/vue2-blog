// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
import './assets/styles.less'
import store from './store'
import ArticleCard from './components/ArticleCard'
import DynamicCard from './components/DynamicCard'
import CommentList from './components/CommentList'
import CommentField from './components/CommentField'

//生产环境不引入mock模拟数据
process.env.NODE_ENV === 'production' || require('./axios/mock')

Vue.use(MuseUI)
Vue.config.productionTip = false

Vue.component('app-article-card', ArticleCard)
Vue.component('app-dynamic-card', DynamicCard)
Vue.component('app-comment-list', CommentList)
Vue.component('app-comment-field', CommentField)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

