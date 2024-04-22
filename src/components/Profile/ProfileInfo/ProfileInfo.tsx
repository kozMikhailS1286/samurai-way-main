import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/store";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React, {useState} from "react";
import {ProfileDataFormPropsType} from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";


type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    setProfileStatus: (status: string) => void
    isOwner: boolean
    setPhotoTC: any
    saveProfile: (formData: any) => any
}

type ContactPropsType = {
    contactTitle: string | null
    contactValue?: string | null
}

type ProfileDataPropsType = {
    profile: any
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            props.setPhotoTC(e.target.files[0])
        }
    }


    const onSubmit = (formData: ProfileDataFormPropsType) => {
        props.saveProfile(formData)
        setEditMode(false)
    }


    const [editMode, setEditMode] = useState(false)

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
                {editMode ? <ProfileDataFormReduxForm initialValues={props.profile} onSubmit={onSubmit}/>
                    :
                    <ProfileData profile={props.profile}
                                 isOwner={props.isOwner}
                                 goToEditMode={()=>{setEditMode(true)}}
                    />}
            </div>
        </div>
    );
}



const ProfileData = (props: ProfileDataPropsType) => {

    return <div>
         {props.isOwner && <div> <button onClick={props.goToEditMode}> edit </button> </div>}
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
            <b> Contacts: </b> {Object.keys(props.profile.contacts).map((key) => {
            return <Contact key={key}
                            contactTitle={key}
                            contactValue={props.profile?.contacts[key as keyof typeof props.profile.contacts]}/>
        })}
        </div>
    </div>
}


const Contact = (props: ContactPropsType) => {
    return <div className={s.contact}>
        <b> {props.contactTitle}:</b> {props.contactValue}
    </div>
}



export default ProfileInfo;