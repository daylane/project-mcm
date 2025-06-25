import { createContext, useCallback, useContext, useState } from 'react';
import ToastContainer from '../components/ToastContainer'
import { v4 as uuid } from 'uuid';

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(({ type, title, description, descriptionEnglish, descriptionChinese }) => {
    const id = uuid();

    const toast = {
      id,
      type,
      title,
      description,
      descriptionEnglish, 
      descriptionChinese,
    };

    setMessages((oldMessages) => [...oldMessages, toast]);
  }, []);

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }} >
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);

    if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
