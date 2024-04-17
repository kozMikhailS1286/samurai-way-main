import React from 'react'
import s from './FormControls.module.css'
import {Field} from "redux-form";


export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input}{...props} />
            <div>
                {props.child}
            </div>
        </div>
    )
}


export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <input {...input}{...props} />
            <div>
                {hasError && <span> {meta.error} </span>}
            </div>
        </div>
    )
}

export const createField = (placeholder: string, component: any, name: string, validate: any ) => (
    <div>
        <Field placeholder={placeholder} component={component} name={name} validate={validate} />
    </div>
)