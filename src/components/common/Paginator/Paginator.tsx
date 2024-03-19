import React, {useState} from 'react';
import s from "./Paginator.module.css";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

const Paginator = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)

    let left = (portionNumber - 1) * props.portionSize + 1;
    let right = portionNumber * props.portionSize;



    return <div>
        {portionNumber > 1 &&
        <button onClick={()=>setPortionNumber(portionNumber-1)}> Left </button>}
                {pages
                .filter(p => p >= left && p <= right)
                .map((p) => {
                    return <span className={props.currentPage === p ? s.selectedPage : undefined}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}> {p} </span>
                })}
        {portionCount > portionNumber &&
        <button onClick={()=>{setPortionNumber(portionNumber+1)}}> Right </button>}
            </div>
}

export default Paginator;