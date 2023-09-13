import {baseURL} from "./baseURL";


export const usersAPI = {
    getUsersData(currentPage = 1, pageSize = 21) {

        return baseURL.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    getFriendsData() {
        return baseURL.get(`users?count=100&friend=true`)
            .then(response => {
                return response.data
            });
    },
    followUser(id) {
        return baseURL.post(`follow/${id}`)
            .then(response => {
                return response
            });
    },
    unfollowUser(id) {
        return baseURL.delete(`follow/${id}`)
            .then(response => {
                return response
            });
    }
}

