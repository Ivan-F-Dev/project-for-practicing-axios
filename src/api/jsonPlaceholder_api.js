import axios from "axios";

const jsonPL_Instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const jsonPL_API = {
    getPosts(limit = 1) {
        return jsonPL_Instance.get(`posts?_limit=${limit}`)
            .then(response => {
                return response.data;
            });
    }
}


