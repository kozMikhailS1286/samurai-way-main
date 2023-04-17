import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {ProfileType} from "../../../redux/store";


type UserPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<UserPropsType, UserPropsType>{

    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2?`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

// let WithUrlDataContainerComponent =withRouter(ProfileContainer)
let mapStateToProps = (state: AppRootStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {
    setUserProfile
}) (ProfileContainer);