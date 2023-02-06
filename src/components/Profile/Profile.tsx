import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType, ActionsType, StoreType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;