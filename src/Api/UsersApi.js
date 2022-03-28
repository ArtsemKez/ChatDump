import {instance} from "./Api";

export const usersAPI = {
    getUsers() {
        return instance.get('users')
    }
}
