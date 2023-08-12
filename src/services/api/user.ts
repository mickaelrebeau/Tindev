import { useApi } from '../../hooks/useApi';


const api = useApi();
   
export async function login(body: { email: string; password: string; }) {
    try {
        const data = await api.post("/auth/login", body)
        return data.data.datas;
    } catch (err) {
        console.log(err);
    }
}

export async function signup(body: {
        firstname: string; lastname: string; pseudo: string;
        email: string; password: string;
    }) {
    try {
        const data = await api.post("/auth/signup", body)
        return data.data.datas;
    } catch (err) {
        console.log(err);
    }
}

export async function resetPassword(body: {
    password: string
}) {
    try {
        const data = await api.post("/auth/reset-password", body)
        return data.data.datas;
    } catch (err) {
        console.log(err);
    }
}

export async function checkPassword(values: string) {
    try {
        const response = await api.post('/profil/check-password', { password: values });
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function authorizationProfil() {
    try {
        const response = await api.get('/profil')
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function updateProfil(values: {
    firstname: string, lastname: string, pseudo: string
}) {
    try {
        const response = await api.post('/profil', values);
        return response;
        
    } catch (error) {
        console.log(error);
    }
}
