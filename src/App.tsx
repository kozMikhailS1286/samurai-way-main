import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from "react-router-dom";
import { PostType, DialogsType, MessagesType } from './index';

type MyPostsPropsType = {
    posts: PostType[]
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const App = (props: MyPostsPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> } />
                    <Route exact path='/profile' render={ () => <Profile posts={props.posts}/> } />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>);
}

export default App;