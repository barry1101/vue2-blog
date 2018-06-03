import api from './config'

export const getUserInfo = () => api.get('/api/user')

export const getList = (page, pageSize = 10) => api.get('/api/list', { params: { page, pageSize } })

export const getArticleList = (page, pageSize = 10) => api.get('/api/articles', { params: { page, pageSize } })

export const getDynamicList = (page, pageSize = 10) => api.get('/api/dynamics', { params: { page, pageSize } })

export const getSearchList = (keyword, page, pageSize = 10) => api.get('/api/search', { params: { keyword, page, pageSize } })

export const getArticle = (id) => api.get(`/api/article/${id}`)

export const getDynamic = (id) => api.get(`/api/dynamic/${id}`)