import {authAPI} from "../Api/AuthApi";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type){
        case 'AUTH/SET_USER_DATA':
            return {
                ...state, ...action.payload
            }
        default: return state
    }
}

export const actions = {
    setAuthUserData: (userId, email, login, isAuth) => ({
        type: 'AUTH/SET_USER_DATA', payload:
            {userId, email, login, isAuth}
    })
}

export const getAuthUserData = () => async (dispatch) => {
    let meData = await authAPI.me()
    let {id, login, email} = meData.data.data
    dispatch(actions.setAuthUserData(id, email, login, true))
}

export default AuthReducer
