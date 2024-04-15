import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {setPhotoTC} from "../../../redux/profile-reducer";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    setProfileStatus: (status: string) => void
    isOwner: boolean
    setPhotoTC: any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.setPhotoTC(e.target.files[0])
        }

    }

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
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            </div>
        </div>
    );
}

export default ProfileInfo;