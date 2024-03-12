import {deletePostAC, setProfileStatusAC, setUserProfile} from "./profile-reducer"
import {addPostAC} from './profile-reducer'
import {sendMessageAC} from './dialogs-reducer'
import {
    followSuccess,
    setUsers,
    unfollowSuccess,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";
import {initializedSuccess} from "./app-reducer";

export type  ProfileType = {
    "aboutMe": string | null
    "contacts": {
        "facebook": string | null
        "website": string | null
        "vk": string | null
        "twitter": string | null
        "instagram": string | null
        "youtube": string | null
        "github": string | null
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string | null
    "fullName": string | null
    "userId": 2,
    "photos": {
        "small": string | null
        "large": string | null
    }
}
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (callback: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}


export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    |
    ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setProfileStatusAC>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePostAC>

// let store: StoreType = {
//   _state: {
//     profilePage: {
//       posts: [
//         {id: 1, message: "Hi, howe are you?", likesCount: 12},
//         {id: 2, message: "It`s my first post", likesCount: 11},
//         {id: 3, message: "Blabla", likesCount: 11},
//         {id: 4, message: "Dada", likesCount: 11},
//       ],
//       newPostText: "it-kamasutra.com"
//     },
//     dialogsPage: {
//       dialogs: [
//         {id: 1, name: "Dimych"},
//         {id: 2, name: "Andrey"},
//         {id: 3, name: "Sveta"},
//         {id: 4, name: "Sasha"},
//         {id: 5, name: "Victor"},
//         {id: 6, name: "Valera"}
//       ],
//       messages: [
//         {id: 1, message: "Hi"},
//         {id: 2, message: "How is yout it-kamasutra?"},
//         {id: 3, message: "Yo"},
//         {id: 4, message: "Yo"},
//         {id: 5, message: "Yo"},
//       ],
//       newMessageBody: ""
//     },
//     sidebar: {},
//   },
//   _callSubscriber(state: RootStateType) {
//     console.log("state changed")
//   },
//   getState() {
//     return this._state;
//   },
//   subscribe (callback) {
//     this._callSubscriber = callback
//   },
//   dispatch (action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//     this._callSubscriber(this._state);
//   }
// }
// //@ts-ignore
// window.state = store
//
// export default store;