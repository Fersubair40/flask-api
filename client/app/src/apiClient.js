import axios from 'axios';



const BASE_URL = 'https://localhost:5000'

const client = axios.create({
    baseURL: BASE_URL,
    json: true
});

class APIClient{
    constructor(accessToken) {
        this.accessToken = accessToken;
    }

    createKudo(repo) {
        return this.perform('post', '/kudos', repo);
    }

    deleteKudo(repo){
        return this.perform('delete',`/kudos/${repo.id}` );
    }

    getKudos() {
        return this.perform('get', '/kudos');
    }

    async perform(method, resource, data) {
        return client({
            method,
            url: resource,
            data,
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            }
        }).then(resp => {
            return resp.data ? resp.data : [];
        })
    }
}


export default APIClient;