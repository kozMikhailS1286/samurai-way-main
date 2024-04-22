import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls";
import {reduxForm, InjectedFormProps} from "redux-form";



type ProfileDataFormPropsType = {
    onSubmit: any
}

 type OnSubmitType = {
     [key: string]: any
 }

const ProfileDataForm: React.FC<InjectedFormProps<OnSubmitType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <button> save </button>
        <div>
            <b> Full name: </b> {createField("Full name", Input, "FullName", [])}
        </div>
        <div>
            <b> lookingForAJob: </b> {createField("", Input , "Input", [], {type: "checkbox"})}
        </div>
            <div>
                <b> My professional skills: </b> {createField("My professional skills", Textarea, "MyProfessionalSkills", [])}
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