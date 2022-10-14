import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://megatour.by/images/2020/02/02/thailand.jpg"/>
            </div>
            <div>
                ava + description
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;