import './App.css'
import { ToastProvider } from './hooks/toast.hook';
import { UsuarioProvider } from './hooks/usuarioHook';
import Rotas from './routes/routes';

function App() {
  
  return (
   <ToastProvider>
    <UsuarioProvider>
     <Rotas/>
   </UsuarioProvider>
   </ToastProvider>
  );
}

export default App
