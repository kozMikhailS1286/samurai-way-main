import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    setProfileStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo    profile={props.profile}
                            status={props.status}
                            updateStatus={props.updateStatus}
                            setProfileStatus={props.setProfileStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;