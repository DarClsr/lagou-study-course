import {http} from "@/plugins/http";


// 登录
export const login= (params)=>{
    return http.post('/users/login',params)
}

// 注册
export const register= (params)=>{
    return http.post('/users',params)
}

// 获取用户信息
export const profile= (username)=>{
    return http.get(`/profiles/${username}`)
}

// 修改用户信息
export const updateInfo= (params)=>{
    return http.put('/user',params)
} 