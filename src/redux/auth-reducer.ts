import {ActionsType} from "./store";
import {UsersStatePropsType} from "./users-reducer";
import Dialogs from "../components/Dialogs/Dialogs";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string | null, login: string) => ( {type: SET_USER_DATA, data: {userId, email, login}} as const )

export const getAuthUserDataTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.me()
        .then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email))
        }
    })
}

export default authReducer;