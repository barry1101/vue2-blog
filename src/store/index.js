import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    userInfo: {},           //用户信息
    list:[],                //首页列表
    articleList: [],        //文章列表
    dynamicList: [],        //动态列表
    searchList: [],         //搜索列表
    temp: null,             //保存当前点击的文章
    listPage: 1,            //首页列表当前页
    articleListPage: 1,     //文章列表当前页
    dynamicListPage: 1,     //动态列表当前页
    searchListPage: 1       //搜索列表当前页
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})