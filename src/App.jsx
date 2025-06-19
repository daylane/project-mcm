import './App.css'
import { UsuarioProvider } from './hooks/usuarioHook';
import Rotas from './routes/routes';

function App() {
  
  return (
   <UsuarioProvider>
     <Rotas/>
   </UsuarioProvider>
  );
}

export default App
