import React from 'react'

export const Textarea = (props: any) => {
    return (
        <div>
            <textarea {...props.input} />
        </div>
    )
}