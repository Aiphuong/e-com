import {axiosBase} from './index'

export function login(data) {
    return axiosBase.post("/login", data)
}