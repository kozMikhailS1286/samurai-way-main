import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from './redux/state';

let rerenderEntereTree = (state: RootStateType) => {
    ReactDOM.render(
      <BrowserRouter>
        <App 
        state={state}
        addPostCallback={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </BrowserRouter>,
      document.getElementById('root')
    );
  }


rerenderEntereTree(store.getState())

store.subscribe(rerenderEntereTree);