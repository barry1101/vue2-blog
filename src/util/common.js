const ACCESS_TOKEN = 'ACCESS_TOKEN'

export const getSessionItem = (key = ACCESS_TOKEN) => {
    return sessionStorage.getItem(key)
}

export const setSessionItem = (key = ACCESS_TOKEN, value) => {
    sessionStorage.setItem(key, value)
}

//jwt
export const getAuthorization = () => {
    return `Bearer ${getSessionItem()}`
}