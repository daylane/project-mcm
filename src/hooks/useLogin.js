import { useState } from "react"
import { useUsuario } from "./UsuarioHook";
import { loginUsuario } from "../api/UsuarioService";


const useLogin = () => {
    //Defini o estado inicial das constantes
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(null);

    //Chama o metodo de armazenar usuário no localStorage
    const { definirUsuario } = useUsuario();

    //Tratamento da chamada da API
    const login = async(body) => {
        setLoading(true);
        setErro(null);

        try{
            const usuario = loginUsuario(body);
             definirUsuario(usuario);
        }
        catch(error){
            setErro(error);
        }
        finally{
            setLoading(false);
        }
    };

    return { login, loading, erro};
};

export default useLogin;