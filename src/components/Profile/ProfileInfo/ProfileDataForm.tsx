import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm, InjectedFormProps} from "redux-form";



export type ProfileDataFormPropsType = {
    onSubmit: any
}

 type OnSubmitType = {
     [key: string]: any
 }

const ProfileDataForm: React.FC<InjectedFormProps<OnSubmitType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <button> save</button>
        <div>
            <b> Full name: </b> {createField("Full name", Input, "FullName", [])}
        </div>
        <div>
            <b> Looking for a job: </b> {createField("", Input, "lookingForAJob", [], {type: "checkbox"})}
        </div>
        <div>
            <b> Looking for a job description: </b> {createField("Looking for a job description", Textarea , "lookingForAJobDescription", [])}
        </div>
        <div>
            <b> My professional
                skills: </b> {createField("My professional skills", Textarea, "MyProfessionalSkills", [])}
        </div>
        <div>
            <b> About me: </b> {createField("About me", Textarea, "AboutMe", [])}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<OnSubmitType, ProfileDataFormPropsType>({
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;