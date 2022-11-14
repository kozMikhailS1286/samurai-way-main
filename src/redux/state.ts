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


let state: RootStateType = {
  profilePage: {
    posts: [
      {id: 1, message: "Hi, howe are you?", likesCount: 12},
      {id: 2, message: "It`s my first post", likesCount: 11},
      {id: 3, message: "Blabla", likesCount: 11},
      {id: 4, message: "Dada", likesCount: 11},
    ],
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
}

export let addPost = (postMessage: string) => {
  let newPost: PostType = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
}

export default state;