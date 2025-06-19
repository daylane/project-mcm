import axiosInstancia from "./axios"


//Chama endpoint de login de usuario
export const loginUsuario = async (dados) => {
    try{
        const response = await axiosInstancia.post('ContaUsuario/Login', dados);
        return Promise.resolve(response.data);
    }
    catch(error){
        return Promise.reject(error.response.data);
    }
}