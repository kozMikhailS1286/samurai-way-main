import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer"
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppRootStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/WithSuspense";
// import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileInfo/ProfileContainer'));
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


export type AppPropsType = {
    initializeAppTC: () => void
    initialized?: boolean
}


class App extends React.Component<AppPropsType, AppPropsType>{


    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (false) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path='/profile' render={withSuspense(ProfileContainer)}/>
                    <Route exact path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route exact path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/music' component={Music}/>
                    <Route exact path='/settings' component={Settings}/>
                    <Route exact path='/login' component={Login}/>
                </div>
            </div>
        );
    }
    }

    const
    mapStateToProps = (state: AppRootStateType) => ({
        initialized: state.app.initialized
    })

    export
    default

    connect(mapStateToProps, {
        initializeAppTC
    })

(
    App
);