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

const defaultState: UserContextInterface = {
  user: {name: '', lastname: '', userName: '', password: '', phone:0 },
  setUser: () => {},
} as UserContextInterface;

export const UserContext = createContext(defaultState);

type UserProvideProps = {
  children: ReactNode;
};

//Provide: context'in oluşturulması yönetilmesimden sorumlu. Kullanıcının bilgilerini içeren contexti oluşturur
//Comsumer: component içinden verilere erişmek. İhtiyaç duyduğu verileri alır
export function UserProvider({children}: UserProvideProps) {
  //useState olarak kullanılmazsa başka bileşenlerde değiştirsek bile değişiklik yansıtılmaz
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
