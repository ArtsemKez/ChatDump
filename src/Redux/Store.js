import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./AuthReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    authScreen: authReducer,
    usersScreen: usersReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
