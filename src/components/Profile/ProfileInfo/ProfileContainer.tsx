import React, {useEffect} from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {
    getProfileStatusTC,
    getUserProfileTC,
    setPhotoTC, saveProfile,
    setProfileStatusAC,
    updateStatusTC
} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {ProfileType} from "../../../redux/store";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    meId: number | null
    status: string
    error: string | null
}

type MapSDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getProfileStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    setProfileStatusAC: (status: string) => void
    setPhotoTC: any
    saveProfile: () => void
}

type ownPropsType = MapStatePropsType & MapSDispatchPropsType;
type PropsType = RouteComponentProps<PathParamsType> & ownPropsType

function ProfileContainer(props: PropsType){


    useEffect(() => {
        let userId = props.match.params.userId ?? props.meId
        if (!userId) {
            props.history.push('/login')
        }
        props.getUserProfileTC(userId)
        props.getProfileStatusTC(userId)
    }, [
        props.match.params.userId, props.meId
    ]);


    return (
        <div>
            <Profile profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatusTC}
                     setProfileStatus={props.setProfileStatusAC}
                     isOwner={!props.match.params.userId}
                     setPhotoTC={props.setPhotoTC}
                     saveProfile={props.saveProfile}
                     error={props.error}
            />
        </div>
    );
}


let WithUrlDataContainer = withRouter(ProfileContainer)

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    meId: state.auth.userId,
    status: state.profilePage.status,
    error: state.profilePage.error
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUserProfileTC,
        getProfileStatusTC,
        updateStatusTC,
        setProfileStatusAC,
        setPhotoTC,
        saveProfile,
        }
    ),
)(WithUrlDataContainer)