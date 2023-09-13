import {
	UNFOLLOW_USER,
	// TOGGLE_FOLLOW_IN_PROGRESS,
	TOGGLE_IS_LOADING,
	SET_FRIENDS_DATA,
} from "../types"
import { usersAPI } from "../../API/usersAPI"

const initialState = {
	friends: [],
	error: null,
	totalCount: null,
	isLoading: false,
	followInProgress: [],
}

const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		// case UNFOLLOW_USER:
		//     return {
		//         ...state,
		//         users: state.users.map(users => {
		//             if (users.id === action.id) {
		//                 return {...users, followed: false}
		//             }
		//             return users;
		//         })
		//     }

		case SET_FRIENDS_DATA:
			return {
				...state,
				friends: action.friends,
				totalCount: action.totalCount,
			}
		case TOGGLE_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			}
		// case TOGGLE_FOLLOW_IN_PROGRESS:
		//     return {
		//         ...state,
		//         followInProgress: action.isFetching
		//             ? [...state.followInProgress, action.userId]
		//             : state.followInProgress.filter(id => id !== action.userId)
		//     }
		default:
			return state
	}
}

export const unfollow = (userId) => ({ type: UNFOLLOW_USER, userId })
export const setFriendsData = (friends, totalCount) => ({
	type: SET_FRIENDS_DATA,
	friends,
	totalCount,
})
export const toggleIsLoading = (isLoading) => ({
	type: TOGGLE_IS_LOADING,
	isLoading,
})
// export const toggleFollowInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId})

export const setFriendsThunk = () => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true))
		usersAPI.getFriendsData().then((data) => {
			dispatch(setFriendsData(data.items, data.totalCount))
			setTimeout(() => {
				dispatch(toggleIsLoading(false))
			}, 500)
		})
	}
}

// export const unfollowUserThunk = (userId) => {
//     return (dispatch) => {
//         dispatch(toggleFollowInProgress(true, userId))
//         UsersAPI.unfollowUser(userId).then(response => {
//             if (response.data.resultCode === 0) {
//                 dispatch(unfollow(userId))
//             }
//             dispatch(toggleFollowInProgress(false, userId))
//         })
//     }
// };

export default friendsReducer
