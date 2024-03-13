import React from 'react';
import {UserStateType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


type UsersPropsType = {
    users: UserStateType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (value: number) => void
    unfollow: (value: number) => void
    followingInProgress: Array<number>
}

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}: UsersPropsType) => {

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
            />
            <div>
                {
                    users.map(u => <User key={u.id}
                                         user={u}
                                         follow={props.follow}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                        />
                    )
                }
            </div>

        </div>
    )
}
export default Users;