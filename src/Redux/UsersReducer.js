import {usersAPI} from "../Api/UsersApi";

let initialState = {
    users: [],
    isPreloader: false,
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS/SET_USERS':
            return {
                ...state, users: action.users
            }
        case 'USERS/TOGGLE_IS_FETCHING':
            return {...state, isPreloader: action.isPreloader}
        default: return state
    }
}

export const actions = {
    setUsers: (users) => ({type: 'USERS/SET_USERS', users}),
    toggleIsPreloader: (isPreloader) => ({type: 'USERS/TOGGLE_IS_FETCHING', isPreloader})
}

export const requestUsers = () => {
    return async (dispatch) => {
        dispatch(actions.toggleIsPreloader(true))
        let Response = await usersAPI.getUsers()
        dispatch(actions.setUsers(Response.data.items));
        dispatch(actions.toggleIsPreloader(false))
    }
}



export default UsersReducer
