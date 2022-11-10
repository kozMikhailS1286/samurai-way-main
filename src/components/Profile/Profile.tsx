import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostType } from './../../index';

type PropsType = {
    posts: PostType[]
}

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;