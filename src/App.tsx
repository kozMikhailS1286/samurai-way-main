import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import store from './redux/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

// type PropsType = {
//     // profilePage: ProfilePageType
//     state: RootStateType
//     dispatch: (action: ActionsType) => void
//     store: StoreType
//
// }


console.log('store', store.getState());


const App = () => {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs'  render={ () => <DialogsContainer  /> } />
                    <Route exact path='/profile' 
                        render={ () => <Profile /> } />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                </div>
            </div>
    );
}

export default App;