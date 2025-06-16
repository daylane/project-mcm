import axiosInstancia from "./axios"


//Chama endpoint de login de usuario
export const loginUsuario = async (dados) => {
    try{
        const response = await axiosInstancia.post('ContaUsuario/Login', dados);
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}