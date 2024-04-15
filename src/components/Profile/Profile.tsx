import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {setPhotoTC} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    setProfileStatus: (status: string) => void
    isOwner: boolean
    setPhotoTC: any

}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo    profile={props.profile}
                            status={props.status}
                            updateStatus={props.updateStatus}
                            setProfileStatus={props.setProfileStatus}
                            isOwner={props.isOwner}
                            setPhotoTC={props.setPhotoTC}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;