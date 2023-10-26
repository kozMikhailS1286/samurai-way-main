import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType, ActionsType, StoreType, ProfileType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {getUserProfileTC} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;