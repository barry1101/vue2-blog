import * as types from './mutations-type'

export default {
    //保存用户信息
    [types.SAVE_USERINFO](state, userInfo) {
        state.userInfo = userInfo
    },

    //保存首页列表
    [types.SAVE_LIST](state, list) {
        state.list.push(...list)
    },

    //保存文章列表
    [types.SAVE_ARTICLELIST](state, articleList) {
        state.articleList.push(...articleList)
    },

    //保存动态列表
    [types.SAVE_DYNAMICLIST](state, dynamicList) {
        state.dynamicList.push(...dynamicList)
    },

    //保存用户当前点击的文章
    [types.SAVE_TEMP](state, temp) {
        state.temp = temp
    },

    //保存搜索列表
    [types.SAVE_SEARCH_LIST](state, searchList) {
        state.searchList.push(...searchList)
    },

    //清空搜索列表，并重置页数为1
    [types.CLEAN_SEARCH_LIST](state) {
        state.searchList = []
        state.searchListPage = 1
    },

    //首页列表页数+1
    [types.UP_LIST_PAGE](state) {
        ++state.listPage
    },

    //文章列表页数+1
    [types.UP_ARTICLE_LIST_PAGE](state) {
        ++state.articleListPage
    },

    //动态列表页数+1
    [types.UP_DYNAMIC_LIST_PAGE](state) {
        ++state.dynamicListPage
    },

    //搜索列表页数+1
    [types.UP_SEARCH_LIST_PAGE](state) {
        ++state.searchListPage
    }
}