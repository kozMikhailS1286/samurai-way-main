import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    setProfileStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                {props.profile.photos.large ? <img src={props.profile.photos.large}/> : 'Нет фото'}
                <ProfileStatusWithHooks status={props.status}
                                updateStatus={props.updateStatus}
                               setProfileStatus={props.setProfileStatus}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;