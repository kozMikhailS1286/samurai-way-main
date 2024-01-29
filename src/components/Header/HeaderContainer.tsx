import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";


export type HeaderPropsType = {
    isAuth: boolean
    login: string
    logout: () => void
}
class HeaderContainer extends React.Component<HeaderPropsType, HeaderPropsType> {



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

export default connect (mapStateToProps, {logout}) (HeaderContainer);