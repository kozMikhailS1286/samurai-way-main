import './App.css';
import HeaderContainer, {HeaderPropsType} from "./components/Header/HeaderContainer"
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";


export type AppPropsType = {
    initializeAppTC: () => void
    initialized?: boolean
}

class App extends React.Component<AppPropsType, AppPropsType>{

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route exact path='/dialogs'  render={ () => <DialogsContainer /> } />
                    <Route exact path='/profile/:userId?'
                           render={ () => <ProfileContainer  /> } />
                    <Route exact path='/users'
                           render={ () => <UsersContainer /> } />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/music' component={Music} />
                    <Route exact path='/settings' component={Settings} />
                    <Route exact path='/login' component={Login} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeAppTC})(App);