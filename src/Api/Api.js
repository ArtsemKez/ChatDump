import axios from "axios";

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "0a4d5e42-bfac-4525-abce-dd128f2c8444"},
})
