import axios from "axios";

export const baseURL = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '208f3671-099f-4ebf-9e0f-22d6e61e175e'
    }
})