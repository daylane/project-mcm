import { createContext, useCallback, useContext, useEffect, useState } from "react";

//“canal” pelo qual os dados do usuário serão compartilhados.
const usuarioContext = createContext(null);

//Metodo que recebe as informações e armazena os dados do usuário
export const UsuarioProvider = ({ children }) => {

    //Armazena os dados e atribui um valor as constantes.
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    //Função que busca o usuário armazenado no localStorage
    const carregarUsuario = useCallback(() => {
        const usuarioToken = localStorage.getItem('@user-info');

        if(usuarioToken){
            setUsuario(JSON.parse(usuarioToken))
        }
        //  Finaliza o carregamento
        setLoading(false);
    }, [])

    //Função que insere as informações de usuário no localStorage
    const definirUsuario = useCallback((usuario) => {
        localStorage.setItem('@user-info', JSON.stringify(usuario));
        setUsuario(usuario);
    }, []);

    //Quando for chamada o hook,roda a função carregarUsuario 1 vez e caso a função mude, roda novamente. 
    useEffect(() => {
        carregarUsuario();
    }, [carregarUsuario]);

     return (
        //Value está devolvendo essa informação para os componentes que usarem o Context.
        //Children indica que os componentes que estiverem dentro do usuarioProvider vão poder usar o contexto.
    <usuarioContext.Provider value={{ usuario, loading, definirUsuario }}>
      {children}
    </usuarioContext.Provider>
    );
}

//Cria um metodo que pode ser chamado nas paginas para pegar as informações de usuário armazenadas.
export const useUsuario = () => {
  const context = useContext(usuarioContext);
  if (!context) {
    console.error('Erro no usuário.');
  }
  return context;
};