import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from './../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPostCallback: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage}
                        addPostCallback={props.addPostCallback}
                        updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}

export default Profile;