import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from './../../redux/state';

type ProfilePropsType = {
    state: ProfilePageType
    addPostCallback: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                        addPostCallback={props.addPostCallback}
            />
        </div>
    );
}

export default Profile;