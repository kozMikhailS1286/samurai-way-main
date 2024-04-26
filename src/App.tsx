import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer"
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route, Switch} from "react-router-dom";
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

export const NotFound = () => {
    return <div>
        Not Found
    </div>
}

class App extends React.Component<AppPropsType, AppPropsType> {


    componentDidMount() {
        this.props.initializeAppTC()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={Login}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const
    mapStateToProps = (state: AppRootStateType) => ({
        initialized: state.app.initialized
    })

export default connect(mapStateToProps, {
    initializeAppTC
})

(
    App
);