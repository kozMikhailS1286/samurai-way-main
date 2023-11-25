import React from "react"
import {setProfileStatusAC} from "../../../redux/profile-reducer";


export type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
    setProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, { editMode: boolean, status: string }> {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: false
        })
        this.props.setProfileStatus(this.state.status)
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            status: e.currentTarget.value
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status || "Enter your status"} </span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>}
            </div>)
    }
}

export default ProfileStatus;