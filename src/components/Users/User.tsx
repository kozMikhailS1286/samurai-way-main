import React from 'react';
import userPhoto from "../../assets/images/user.png";
import {UserStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../redux/store";



type UserPropsType = {
    user: UserStateType
    follow: (value: number) => void
    unfollow: (value: number) => void
    followingInProgress: Array<number>
}

const User = ({user, followingInProgress, unfollow, follow}: UserPropsType) => {
    console.log("User render " + user.id)
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  unfollow(user.id)
                                              }}> Unfollow </button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  follow(user.id)
                                              }}> Follow </button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
        </div>
    )
}
export default User;