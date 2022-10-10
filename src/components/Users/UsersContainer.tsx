import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC, toggleIsFollowingProgressAC, unfollow,
    UsersType
} from "../../redux/Users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import loader from '../../assets/img/loading-13.gif';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumder: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isF: boolean) => void
    toggleIsFollowingProgress: (isF: boolean, id: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number)=>void

}

export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <img width={50} height={50} src={loader}/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(onfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersType>) => {
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

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        toggleIsFetching: toggleIsFetchingAC,
        toggleIsFollowingProgress: toggleIsFollowingProgressAC,
        getUsersThunkCreator: getUsersThunkCreator,
        follow: follow,
        unfollow: unfollow})
)(UsersContainer)
