import { useContext, createContext, useState } from 'react';

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openSidebar = () => {
    setOpen(true);
    };
    const closeSidebar = () => {
      setOpen(false);
    };
  return (
    <GlobalContext.Provider value={{ openSidebar, open, closeSidebar }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
