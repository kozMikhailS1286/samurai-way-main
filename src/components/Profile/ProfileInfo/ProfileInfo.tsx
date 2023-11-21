import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


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
                <ProfileStatus status={"Status"}/>
            </div>
        </div>
    );
}

export default ProfileInfo;