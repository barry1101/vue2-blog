import * as types from './mutations-type'
import { getUserInfo, getList, getArticleList, getDynamicList, getSearchList } from '../axios/api'

export default {
    async getUserInfo({ commit }) {
        let res = await getUserInfo()
        commit(types.SAVE_USERINFO, res)
    },

    async getList({ commit }, page, pageSize) {
        let res = await getList(page, pageSize)
        commit(types.SAVE_LIST, res)
    },

    async getArticleList({ commit }, page, pageSize) {
        let res = await getArticleList(page, pageSize)
        commit(types.SAVE_ARTICLELIST, res)
    },

    async getDynamicList({ commit }, page, pageSize) {
        let res = await getDynamicList(page, pageSize)
        commit(types.SAVE_DYNAMICLIST, res)
    },

    async getSearchList({ commit }, keyword, page, pageSize) {
        let res = await getSearchList(keyword, page, pageSize)
        commit(types.SAVE_SEARCH_LIST, res)
    },

    cleanSearchList({ commit }) {
        commit(types.CLEAN_SEARCH_LIST)
    },

    saveTemp({ commit }, item) {
        commit(types.SAVE_TEMP, item)
    },

    upListPage({ commit }) {
        commit(types.UP_LIST_PAGE)
    },

    upArticleListPage({ commit }) {
        commit(types.UP_ARTICLE_LIST_PAGE)
    },

    upDynamicListPage({ commit }) {
        commit(types.UP_DYNAMIC_LIST_PAGE)
    },

    upSearchListPage({ commit }) {
        commit(types.UP_SEARCH_LIST_PAGE)
    }
}