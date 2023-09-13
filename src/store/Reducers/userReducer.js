import {
    FOLLOW_USER,
    UNFOLLOW_USER,
    SET_CURRENT_PAGE,
    SET_USERS_DATA, TOGGLE_FOLLOW_IN_PROGRESS,
    TOGGLE_IS_LOADING,
} from '../types';
import {usersAPI} from '../../API/usersAPI';

const initialState = {
    users: [],
    pageSize: 21,
    error: null,
    totalCount: null,
    currentPage: 1,
    isLoading: false,
    followInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.id) {
                        return {...users, followed: true}
                    }
                    return users;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.id) {
                        return {...users, followed: false}
                    }
                    return users;
                })
            }
        case SET_USERS_DATA:
            return {
                ...state,
                users: action.users,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.id]
                    : state.followInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }

}

export const follow = (id) => ({type: FOLLOW_USER, id})
export const unfollow = (id) => ({type: UNFOLLOW_USER, id})
export const setUsersData = (users, totalCount) => ({type: SET_USERS_DATA, users, totalCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})
export const toggleFollowInProgress = (isFetching, id) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, id})

export const setUsersThunk = (currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true))
        usersAPI.getUsersData(currentPage).then(data => {
            dispatch(setUsersData(data.items, data.totalCount))
            setTimeout(() => {
                dispatch(toggleIsLoading(false))
            }, 500)
        })
    }
};

export const followUserThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, id))
        usersAPI.followUser(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(id))
                dispatch(toggleFollowInProgress(false, id))
            }
        })
    }
};

export const unfollowUserThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(true, id))
        usersAPI.unfollowUser(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(id))
                dispatch(toggleFollowInProgress(false, id))
            }
        })
    }
};


export default usersReducer;