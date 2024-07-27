import axios from "axios";

export const TaskApplicationBackend = axios.create({
    baseURL : 'https://localhost:3000',
})

// TaskApplicationBackend.interceptors.request.use(
//     (config)=>{
//         console.log("Run this configuration");
//         console.log(config);
//     },
//     (error)=>{
//         return Promise.reject(error);
//     }
// );