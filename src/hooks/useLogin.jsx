import { useState } from "react"
import { useUsuario } from "./usuarioHook";
import { loginUsuario } from "../api/UsuarioService";


function useLogin() {
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
            const usuario = await loginUsuario(body);
            definirUsuario(usuario);
            return{ sucess: true};
        }
        catch (error) {
            setErro(error);
            return{sucess: false};
        } finally {
            setLoading(false);
        }
    };
    return { login, loading, erro};
};

export default useLogin;