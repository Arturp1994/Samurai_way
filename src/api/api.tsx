import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "d8167f84-ee50-4314-a87a-bf1eeed700cf"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userID: number){
       return  instance.post(`follow/${userID}`)
    },
    unfollow(userID: number){
        return  instance.delete(`follow/${userID}`)
    },
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)

    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}






export const getUsers2 = (currentPage:number, pageSize: number)=>{
    return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials:true
    }).then(response=>response.data)
}