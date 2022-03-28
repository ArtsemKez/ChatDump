import {instance} from "./Api";

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response)
            .catch((error) => {
                console.error(error);
            });
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}
