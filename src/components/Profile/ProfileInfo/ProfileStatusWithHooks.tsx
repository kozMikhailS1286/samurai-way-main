import React, {useState} from "react"


export type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
    setProfileStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)



    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.setProfileStatus(status)
        props.updateStatus(status)
    }

    const onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }




        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}> {props.status || "Enter your status"} </span>
                    </div>}
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                               value={status}/>
                    </div>}
            </div>)
}

export default ProfileStatusWithHooks;