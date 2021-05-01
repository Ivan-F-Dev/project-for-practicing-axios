import axios from "axios";

const itKamasutra_Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2b9715a1-d8ae-497a-9821-aa6cd69b6167"
    }
});

export const itKamasutra_API = {
    getMe() {
        return itKamasutra_Instance.get('auth/me')
            .then(response => response.data)
                    // return response;
    },
    login(email, password, rememberMe= false, captcha=null) {
        return itKamasutra_Instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return itKamasutra_Instance.delete('auth/login')
            .then( response => response)
    }
}



