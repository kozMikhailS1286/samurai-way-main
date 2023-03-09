import React, {FC, useEffect} from "react";
import {UserStateType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

type UserPropsType = {
    setUsers: (users: UserStateType[]) => void
    users: UserStateType[]
    follow: (value: number) => void
    unfollow: (value: number) => void
}
class Users extends React.Component<UserPropsType, UserPropsType>{

    constructor(props: UserPropsType) {
        super(props);
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}> Unfollow </button>
                                    : <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}> Follow </button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;