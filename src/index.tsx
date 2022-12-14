import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from './redux/state'
import {RootStateType, updateNewPostText} from './redux/state';
import { isTryStatement } from 'typescript';

let rerenderEntereTree = (state: RootStateType) => {
    ReactDOM.render(
      <BrowserRouter>
        <App 
        state={state}
        addPostCallback={addPost}
        updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>,
      document.getElementById('root')
    );
  }

subscribe(rerenderEntereTree);

rerenderEntereTree(state)