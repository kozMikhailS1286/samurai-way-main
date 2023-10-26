import React, {useEffect} from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {getUserProfileTC} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileType} from "../../../redux/store";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    meId: number | null
}

type MapSDispatchPropsType = {
    // setUserProfile: (profile: ProfileType | null) => void
    getUserProfileTC: (userId: string) => void
}

type ownPropstype = MapStatePropsType & MapSDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ownPropstype

function ProfileContainer(props: PropsType){

    useEffect(() => {
        let userId = props.match.params.userId ?? props.meId
        if (!userId) return
        props.getUserProfileTC(userId)
    }, [
        props.match.params.userId, props.meId
    ]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let WithUrlDataContainer = withRouter(ProfileContainer)

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    meId: state.auth.userId
})


export default connect(mapStateToProps, {
    getUserProfileTC
}) (WithUrlDataContainer);