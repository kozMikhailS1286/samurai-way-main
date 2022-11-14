import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import {RootStateType} from './redux/state';


type AppPropsType = {
    state:RootStateType
    addPostCallback: (postMessage: string) => void
}
const App = (props: AppPropsType) => {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs' 
                        render={ () => <Dialogs state={props.state.dialogsPage} /> } />
                    <Route exact path='/profile' 
                        render={ () => <Profile state={props.state.profilePage}
                                                addPostCallback={props.addPostCallback}
                        /> } />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                </div>
            </div>
    );
}

export default App;