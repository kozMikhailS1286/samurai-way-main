import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage, toggleFollowingProgress, unfollow,
    UserStateType
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type UserPropsType = {
    // setUsers: (users: UserStateType[]) => void
    users: UserStateType[]
    follow: (value: number) => void
    unfollow: (value: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    // setCurrentPage: (p: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    // toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: number[]
    getUsers: (currentPage:number, pageSize: number) => void
}
class UsersContainer extends React.Component<UserPropsType, UserPropsType>{


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        // })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users          totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={ this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserStateType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

// export default withAuthRedirect(connect(mapStateToProps, {
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers,
//     follow,
//     unfollow
// }) (UsersContainer));

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
        follow,
        unfollow})
)(UsersContainer)