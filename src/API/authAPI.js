import {baseURL} from "./baseURL";


export const authAPI = {
    me() {
        return baseURL.get(`auth/me`)
            .then(response => {
                return response.data
            });
    },
    login(email, password, rememberMe = false) {
        return baseURL.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return baseURL.delete(`auth/login`)
    }

}