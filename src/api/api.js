import * as axios from "axios";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "7fea701d-c8e3-4332-b214-eeac87de4bac"
    }
});

//теперь вместо axios.get нужно вызывать instance
export let usersAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    follow(userId){
        return instance.post(`follow/${userId}`).then(response => {
            return response.data
        })
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    }
};

export let profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(userStatus){
        return instance.put(`profile/status`, {status: userStatus})
    }
};

export let auth_API = {
    auth(){
        return instance.get("auth/me").then(response => response.data)
    }
};


