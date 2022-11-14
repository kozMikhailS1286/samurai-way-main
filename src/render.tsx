import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from './redux/state'
import {RootStateType} from './redux/state';


export let rerenderEntereTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
      state={state}
      addPostCallback={addPost}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}