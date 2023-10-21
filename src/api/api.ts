import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "314b0124-4f3e-420a-9aac-2a8ba6dd682b"
    }
})

export const usersAPI = {
    getUsers(currentPage: any, pageSize: any) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => {
                return response.data
            })
    },
    getLogin() {
        return instance.get(`auth/me`, )
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    }
}