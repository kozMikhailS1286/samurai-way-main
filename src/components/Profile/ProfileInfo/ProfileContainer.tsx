import React, {useEffect} from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {setUserProfile} from "../../../redux/profile-reducer";
import {RouteComponentProps, useParams, withRouter} from "react-router-dom";
import {ProfileType} from "../../../redux/store";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapSDispatchPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

type ownPropstype = MapStatePropsType & MapSDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ownPropstype

function ProfileContainer(props: PropsType){

    useEffect(() => {
        let userId = props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, []);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let WithUrlDataContainer = withRouter(ProfileContainer)

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {
    setUserProfile
}) (WithUrlDataContainer);