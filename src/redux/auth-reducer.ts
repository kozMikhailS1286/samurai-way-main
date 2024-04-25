import {ActionsType} from "./store";
import {AnyAction, Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../redux/redux-store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET_USER_DATA" as const
const GET_CAPTCHA = "GET_CAPTCHA" as const


export type AuthReducerPropsType = {
    userId: number | null
    email: string | null,
    login: string
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: AuthReducerPropsType = {
    userId: null, // в документашке просто "id"
    email: null,
    login: 'samurai',
    isAuth: false,
    captchaUrl: null
}


const authReducer = (state: AuthReducerPropsType = initialState, action: ActionsType): AuthReducerPropsType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case GET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string, isAuth: boolean) => ( {type: SET_USER_DATA,
    data: {userId, email, login, isAuth}} as const )

export const captchaAC = (captchaUrl: string) => ({type: GET_CAPTCHA, captchaUrl} as const)

export const getAuthUserDataTC = () => async (dispatch: Dispatch<ActionsType>) => {
    let res = await authAPI.me()
    if (res.resultCode === 0) {
        let {id, login, email} = res.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    let res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        if (res.resultCode === 10) {
            console.log('hello')
            dispatch(captchaTC())
        }
            let message = res.messages ? res.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}))
        }
}

export const captchaTC = () => async (dispatch: ThunkDispatch<AppRootStateType, void, AnyAction>) => {
    let res = await securityAPI.getCaptchaUrl()
    dispatch(captchaAC(res.url))
}

export const logout = () => async (dispatch: Dispatch<ActionsType>) => {
    let res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, " ", false))
    }
}

export default authReducer;