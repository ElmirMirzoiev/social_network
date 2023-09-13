import {baseURL} from "./baseURL";


export const profileAPI = {
    getProfileData(userId) {
        return baseURL.get(`profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getUserStatus(id) {
        return baseURL.get(`profile/status/${id}`)
            .then(response => {
                return response.data
            })
    }
}