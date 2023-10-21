import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
// export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
// export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppRootStateType = ReturnType<typeof reducers>

export default store;
