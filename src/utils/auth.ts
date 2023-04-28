const TokenKey = 'Admin-Token'

export function getToken() {
    return sessionStorage.getItem(TokenKey)
}
export function setToken(token:string) {
    return sessionStorage.setItem(TokenKey, token)
}
export function removeToken() {
    return sessionStorage.removeItem(TokenKey)
}
// const UserName = 'User-Name'
// export function getUserName() {
//     return sessionStorage.getItem(UserName)
// }
// export function setUserName(user:string) {
//     return sessionStorage.setItem(UserName, user)
// }
// export function removeUserName() {
//     return sessionStorage.removeItem(UserName)
// }