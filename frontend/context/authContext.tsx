'use client'

import { createContext , useState , ReactNode} from "react";

  export const AuthContext = createContext<any>({});
  
type AuthContextProps = {
  children: ReactNode,
}
export const AuthProvider = ({ children }:AuthContextProps) => {

  const [auth, setAuth] = useState<any>(null);
  // const persistData = localStorage.getItem("persist");
  // const [persist, setPersist] = useState(persistData ? JSON.parse(persistData) : false);
  return <AuthContext.Provider value={{auth , setAuth}}>
      {children}
    </AuthContext.Provider>;
  
}

export default AuthProvider;