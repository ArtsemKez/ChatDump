export const getIsAuth = (state) => {
    return state.authScreen.isAuth
}

export const getUsers = (state) => {
    return state.usersScreen.users
}

export const getIsPreloader = (state) => {
    return state.usersScreen.isPreloader
}
