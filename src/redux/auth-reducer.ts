import {ActionsType} from "./store";
import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../redux/redux-store";

const SET_USER_DATA = "SET_USER_DATA" as const


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


export const getAuthUserDataTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.me()
        .then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<AppRootStateType,void,AnyAction>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            }
        })
}

export const logout = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logout()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(null, null, " ", false))
            }
        })
}

export default authReducer;