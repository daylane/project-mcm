import axios from "axios";

//Identifica qual o endereço da API
const axiosInstancia = axios.create({
    baseURL: 'https://localhost:7138/api/'
});

//Busca o token de authenticação no local storage e configuração o authorization na chamada da api
axiosInstancia.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if(token){
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

//Retornar erro se api retornar 401
axiosInstancia.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Não autorizado.")
    }
    return Promise.reject(error);
  }
);

export default axiosInstancia;