const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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
  newPostText: string
}

export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

type SidebarType = {}

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

export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

export const addPostAC = () => {
  return {
      type: ADD_POST
  } as const
}

export const changeNewTextAC = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
  } as const
}

let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, howe are you?", likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11},
      ],
      newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
      ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is yout it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
      ],
    },
    sidebar: {},
  },
  _callSubscriber(state: RootStateType) {
    console.log("state changed")
  },

  getState() {    
    return this._state;
  },
  subscribe (callback) {
    this._callSubscriber = callback
  }, 

  dispatch (action) {
    if (action.type === "ADD-POST") {
        let newPost: PostType = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state);
    }
  }
}

export default store;