import React from 'react';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export type User = {
  name?: string;
  lastname?: string;
  userName: string | undefined;
  password: string | undefined;
  phone?: number;
};

export interface UserContextInterface {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}


export const UserContext = createContext({} as UserContextInterface);

type Props = {
  children: ReactNode;
};

export function UserProvider({children}: Props) {
  const [user, setUser] = useState<User>({name: undefined, lastname: undefined, userName: '', password: '', phone: undefined});

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
