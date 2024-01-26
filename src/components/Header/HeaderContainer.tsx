import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC, logout} from "../../redux/auth-reducer";


export type HeaderPropsType = {
    // setAuthUserData: (id: number, email: string | null, login: string) => void
    getAuthUserDataTC: () => void
    isAuth: boolean
    login: string
    logout: () => void
}
class HeaderContainer extends React.Component<HeaderPropsType, HeaderPropsType> {

    componentDidMount() {
        // getAuthUserDataTC()
        this.props.getAuthUserDataTC()
    }

    render() {
        console.log(this.props.login, 'render')
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: any) => {
    console.log(state.isAuth, 'mapStateToProps')
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect (mapStateToProps, {getAuthUserDataTC, logout}) (HeaderContainer);