import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType = {
  id: number
  message: string
  likesCount: number
} 

export let posts: PostType[] = [
  {id: 1, message: "Hi, howe are you?", likesCount: 12},
  {id: 2, message: "It`s my first post", likesCount: 11},
  {id: 3, message: "Blabla", likesCount: 11},
  {id: 4, message: "Dada", likesCount: 11},
]

export type DialogsType = {
  id: number
  name: string
}

export let dialogs: DialogsType[] = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Victor"},
  {id: 6, name: "Valera"}
]

export type MessagesType = {
  id: number
  message: string
}

export let messages: MessagesType[] = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How is yout it-kamasutra?"},
  {id: 3, message: "Yo"},
  {id: 4, message: "Yo"},
  {id: 5, message: "Yo"},
]

ReactDOM.render(
    <App 
    posts={posts}
    dialogs={dialogs}
    messages={messages}
    />,
  document.getElementById('root')
);