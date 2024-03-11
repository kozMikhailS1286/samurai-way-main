import {ActionsType} from "./store";
import {AnyAction, Dispatch} from "redux";
import {getAuthUserDataTC} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "./redux-store";


const SET_INITIALIZED = "app/SET_INITIALIZED" as const

export type appReducerPropsType = {
    initialized: boolean
}


let initialState: appReducerPropsType = {
    initialized: false
}


const appReducer = (state: appReducerPropsType = initialState, action: ActionsType): appReducerPropsType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const initializedSuccess = () => ( {type: SET_INITIALIZED} as const )


export const initializeAppTC = () => (dispatch: ThunkDispatch<AppRootStateType,void,AnyAction>) => {
    let promise = dispatch(getAuthUserDataTC())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
}


export default appReducer;