import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import {RootStateType, StoreType} from './redux/state';

type PropsType = {
    state: RootStateType
    addPostCallback: () => void
    updateNewPostText: (newText: string) => void
}


const App: React.FC<PropsType> = (props) => {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs' 
                        render={ () => <Dialogs state={props.state.dialogsPage} /> } />
                    <Route exact path='/profile' 
                        render={ () => <Profile 
                            profilePage={props.state.profilePage}               
                            addPostCallback={props.addPostCallback}
                            updateNewPostText={props.updateNewPostText}
                        /> } />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                </div>
            </div>
    );
}

export default App;