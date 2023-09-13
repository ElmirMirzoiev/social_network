import axios from "axios";

export const baseURL = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'f9981e93-c411-4fb6-8594-6d7ec965a8e7'
    }
})