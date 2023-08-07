import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";


export type HeaderPropsType = {
    setAuthUserData: (id: number, email: string | null, login: string) => void
    isAuth: boolean
    login: string
}
export class HeaderContainer extends React.Component<HeaderPropsType, HeaderPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login,email)
                }
        })
    }

    render() {
        console.log(this.props.login, 'render')
        return (
            <Header {...this.props} isAuth={this.props.isAuth} />
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

export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);