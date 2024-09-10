import axios from "axios";
import { getUserToken } from "../utils/LoginUtils";

export const TaskApplicationBackend = axios.create({
    baseURL : 'https://localhost:3000',
})

TaskApplicationBackend.interceptors.request.use((config) => {
    const token = getUserToken();
    if (token) {
        config.headers = { Authorization: `Bearer $(token)` };
        console.log("inside interceptor");
    }
    return config;
    // console.log("Run this configuration");
    // console.log(config);
}, (error) => {
    return Promise.reject(error);
});