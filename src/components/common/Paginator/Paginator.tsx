import React from 'react';
import s from "./Paginator.module.css";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : undefined}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}
            </div>
}

export default Paginator;