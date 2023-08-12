import axios, { AxiosInstance } from "axios";

export function useApi() {  
    
    const headers = { 'Access-Control-Allow-Origin' : '*' };

    const api : AxiosInstance = axios.create({
        baseURL : import.meta.env.VITE_API_BASE_URL,
        headers
    })
    
    api.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')

        if (token) {
            const sliceToken = token.slice(1, -1)
            config.headers['Authorization'] = `Bearer ${sliceToken}`;
        }

        return config
    });

    api.interceptors.response.use( 
        (response) => response,
        async (error) => {
            console.log(error)

            if(error.response && error.response.status === 401) {
                const refreshToken = localStorage.getItem('refreshToken') as string;
                if (refreshToken) {
                    try {
                        const originalRequest = error.config;
                        if (!originalRequest._retry) {
                            // pour éviter boucle infinie du refreshToken
                            originalRequest._retry = true;
                        }

                        // Renvoyer une requête avec le refreshToken pour obtenir un nouveau token
                        const sliceRefreshToken = refreshToken.slice(1, -1);
                        const response = await axios.post(import.meta.env.VITE_API_BASE_URL +'/refresh-token',{},{headers: {
                            Authorization: `Bearer ${sliceRefreshToken}`,
                        }
                        });

                        // Si le rafraîchissement du token est réussi, enregistrer le nouveau token et le refreshToken
                        localStorage.setItem('token', response.data.data.token);
                        localStorage.setItem('refresh_token', response.data.datas.refreshToken);

                        // Renvoyer la requête originale avec le nouveau token
                        originalRequest.headers['Authorization'] = 'Bearer ' + response.data.token;
                        return axios(originalRequest);
                        
                    } catch (refreshError) {
                        // Le rafraîchissement du token a échoué, rediriger vers la page de connexion
                        // faire un fonction pour delete le localStorage
                        window.location.href = '/';
                    }
                } else {
                    // Si aucun refreshToken n'est disponible, rediriger vers la page de connexion
                    // faire un fonction pour delete le localStorage
                    window.location.href = '/';
                }
            }

            // if(error.response && error.response.status === 403) {
            //     // faire un traitement particulier
            // } 
            
            // if(error.message  === 'Network Error') {
            //     // faire un traitement particulier
            // }  
        }
    );

    return api;
}