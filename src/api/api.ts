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
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('You use old API')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<{data: {}
            fieldsErrors: []
            messages: string[]
            resultCode: number}>(`profile/status`, {status})
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-type': "multipart/form-data"
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put(`/profile`, profile)
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`, )
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`, )
            .then(response => {
                return response.data
            })
    }
}