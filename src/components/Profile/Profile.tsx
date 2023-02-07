import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType, ActionsType, StoreType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

// type ProfilePropsType = {
//     store: StoreType
// }

const Profile = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;