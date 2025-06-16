import './App.css'
import { UsuarioProvider } from './hooks/UsuarioHook';
import Rotas from './routes/routes';

function App() {
  
  return (
   <UsuarioProvider>
     <Rotas/>
   </UsuarioProvider>
  );
}

export default App
