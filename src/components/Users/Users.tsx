import React, {FC, useEffect} from "react";
import {UsersStatePropsType, UserStateType} from "../../redux/users-reducer";

type UserPropsType = {
    setUsers: (users: UserStateType[]) => void
    users: UserStateType[]
    follow: (value: number) => void
    unfollow: (value: number) => void
}
const Users: FC<UserPropsType> = (props) => {

        useEffect(() => {
            props.setUsers([
                    {
                        id: 1,
                        photoUrl: "https://cdn1.flamp.ru/489671bbc112e7621d7d9f013bbb8a49_100_100.jpg",
                        followed: false,
                        fullName: "Dmitry",
                        status: "I am a boss",
                        location: {city: "Minsk", country: "Belarus"}
                    },
                    {
                        id: 2,
                        photoUrl: "https://cdn1.flamp.ru/489671bbc112e7621d7d9f013bbb8a49_100_100.jpg",
                        followed: true,
                        fullName: "Sasha",
                        status: "I am a boss too",
                        location: {city: "Moscow", country: "Russia"}
                    },
                    {
                        id: 3,
                        photoUrl: "https://cdn1.flamp.ru/489671bbc112e7621d7d9f013bbb8a49_100_100.jpg",
                        followed: false,
                        fullName: "Andrey",
                        status: "I am a boss too",
                        location: {city: "Kiev", country: "Ukraine"}
                    }
                ]
            )
        }, [])
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.follow(u.id)
                                    }}> Unfollow </button>
                                    : <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;