import React from "react";
import {createField, Input} from "../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import {FormDataType} from "../../Login/Login";

const ProfileDataForm = () => {
    return <form>
        <button onClick={()=>{}}> save </button>
        <div>
            <b> Full name: </b> {createField("Full name", Input, "FullName", [])}
        </div>
        {/*<div>*/}
        {/*    <b> lookingForAJob: </b> {props.profile.lookingForAJob ? "Yes" : "No"}*/}
        {/*</div>*/}
        {/*{props.profile.lookingForAJob &&*/}
        {/*    <div>*/}
        {/*        <b> My professional skills: </b> {props.profile.lookingForAJobDescription}*/}
        {/*    </div>*/}
        {/*}*/}
        {/*<div>*/}
        {/*    <b> About me: </b> {props.profile.aboutMe}*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <b> Contacts: </b> {Object.keys(props.profile.contacts).map((key) => {*/}
        {/*    return <Contact key={key}*/}
        {/*                    contactTitle={key}*/}
        {/*                    contactValue={props.profile?.contacts[key as keyof typeof props.profile.contacts]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </form>
}

const ProfileDataFormReduxForm = reduxForm<FormDataType>({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;