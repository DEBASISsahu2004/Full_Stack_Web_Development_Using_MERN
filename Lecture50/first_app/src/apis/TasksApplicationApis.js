import axios from "axios";
import { getUserToken } from "../utils/LoginUtils";

export const TaskApplicationBackend = axios.create({
    baseURL : 'https://localhost:3000',
})

TaskApplicationBackend.interceptors.request.use(
    (config)=>{
        const token = getUserToken();
        if(token){
            config.headers = {Authorization: token};
            console.log("Inside interceptor");
        }
    },
    (error)=>{
        return Promise.reject(error);
    }
);