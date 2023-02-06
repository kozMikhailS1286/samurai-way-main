//import store from './redux/redux-store';
import store, {RootStateType} from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntereTree = (state: any) => {
    ReactDOM.render(
      <BrowserRouter>
        <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
        />
      </BrowserRouter>,
      document.getElementById('root')
    );
  }


rerenderEntereTree(store.getState())

store.subscribe(()=> {
    let state = store.getState()
    rerenderEntereTree(state)
});