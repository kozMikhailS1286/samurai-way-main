import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";


// type PropsType = {
//     // profilePage: ProfilePageType
//     state: RootStateType
//     dispatch: (action: ActionsType) => void
//     store: StoreType
//
// }



const App = () => {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs'  render={ () => <DialogsContainer /> } />
                    <Route exact path='/profile' 
                        render={ () => <Profile /> } />
                    <Route exact path='/users'
                           render={ () => <UsersContainer /> } />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                </div>
            </div>
    );
}

export default App;