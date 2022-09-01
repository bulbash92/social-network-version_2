import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ef800069-c5f3-467c-9f0b-02d4de59b8ee'
    }

})

