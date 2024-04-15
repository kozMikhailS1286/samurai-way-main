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
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}
                                        setProfileStatus={props.setProfileStatus}
                />
                {props.profile.photos.large ? <img src={props.profile.photos.large}/> : 'Нет фото'}
                <div>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                </div>

                <div>
                    <div>
                        <b> fullName: </b> {props.profile.fullName}
                    </div>
                    <div>
                        <b> lookingForAJob: </b> {props.profile.lookingForAJob ? "Yes" : "No"}
                    </div>
                        {props.profile.lookingForAJob &&
                            <div>
                                <b> My professional skills: </b> {props.profile.lookingForAJobDescription}
                            </div>
                        }
                        <div>
                            <b> About me: </b> {props.profile.aboutMe}
                        </div>
                    <div>
                        <b> Contacts: </b>
                    </div>




                    github: {props.profile.contacts.github} <br/>
                    vk: {props.profile.contacts.vk} <br/>
                    facebook: {props.profile.contacts.facebook} <br/>
                    instagram: {props.profile.contacts.instagram} <br/>
                    twitter: {props.profile.contacts.twitter} <br/>
                    website: {props.profile.contacts.website} <br/>
                    youtube: {props.profile.contacts.youtube} <br/>
                    mainLink: {props.profile.contacts.mainLink} <br/>
                </div>


            </div>
        </div>
    );
}

export default ProfileInfo;