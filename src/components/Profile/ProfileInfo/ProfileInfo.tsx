import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";
import ProfileContainer from "./ProfileContainer";


type ProfileInfoPropsType = {
    profile: ProfileType | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                {props.profile.photos.large ? <img src={props.profile.photos.large}/> : 'Нет фото'}
                <h3> {props.profile.aboutMe}</h3>
                + description
            </div>
        </div>
    );
}

export default ProfileInfo;