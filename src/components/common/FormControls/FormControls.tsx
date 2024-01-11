import React from 'react'
import s from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input}{...props} />
            <div>
                {hasError && <span> {meta.error} </span>}
            </div>
        </div>
    )
}