import {ActionsType} from "./store";
import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../redux/redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA" as const


export type AuthReducerPropsType = {
    userId: number | null
    email: string | null,
    login: string
    isAuth: boolean
}

let initialState: AuthReducerPropsType = {
    userId: null, // в документашке просто "id"
    email: null,
    login: 'samurai',
    isAuth: false,
    // isFetching: false // чтоб добавить позже самостоятельно
}


const authReducer = (state: AuthReducerPropsType = initialState, action: ActionsType): AuthReducerPropsType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string, isAuth: boolean) => ( {type: SET_USER_DATA,
    data: {userId, email, login, isAuth}} as const )


export const getAuthUserDataTC = () => async (dispatch: Dispatch<ActionsType>) => {
    let res = await authAPI.me()
    if (res.resultCode === 0) {
        let {id, login, email} = res.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    let res = await authAPI.login(email, password, rememberMe)
    if (res.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        let message = res.messages ? res.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch<ActionsType>) => {
    let res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, " ", false))
    }
}

export default authReducer;