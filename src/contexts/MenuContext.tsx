import { createContext, useState } from 'react';

interface MenuContextProps {
  children: React.ReactNode;
}

export const MenuContext = createContext(null);

export const MenuContextProvider = ({ children }: MenuContextProps) => {
  const [state, setState] = useState('Initial state');

  return (
    <MenuContext.Provider value={{ state, setState }}>
      {children}
    </MenuContext.Provider>
  );
};
