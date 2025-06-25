import { useState } from "react"
import { useUsuario } from "./usuarioHook";
import { loginUsuario } from "../api/UsuarioService";
import { useToast } from "./toast.hook";


function useLogin() {
    //Defini o estado inicial das constantes
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(null);

    //importar o toast de notificação
    const { addToast } = useToast();
    
    //Chama o metodo de armazenar usuário no localStorage
    const { definirUsuario } = useUsuario();

    //Tratamento da chamada da API
    const login = async(body) => {
        setLoading(true);
        setErro(null);

        try{
            const usuario = await loginUsuario(body);
            definirUsuario(usuario);
            return{ sucess: true};
        }
        catch (error) {
            setErro(error);
             let errorMessage = 'Erro no Login';

            if (error.response && error.response.data) {
                if (typeof error.response.data === 'object') {
                errorMessage =
                    JSON.stringify(error.response.data, null, 2) ||
                    error.message ||
                    error.response.data.title;
                } else {
                errorMessage = error.response.data;
                }
            }
              addToast({
                type: 'danger',
                title: 'Erro',
                description: errorMessage,
            });
           
            return{sucess: false};
        } finally {
            setLoading(false);
        }
    };
    return { login, loading, erro};
};

export default useLogin;