import store, {RootStateType} from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";


let rerenderEntereTree = () => {
    ReactDOM.render(
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>,
      document.getElementById('root')
    );
  }


rerenderEntereTree()

store.subscribe(()=> {
    rerenderEntereTree()
});