'use client'

import { createContext,useContext,useDebugValue , useState ,ReactNode} from "react";

type AuthContextType = {
    auth: any| null;
    setAuth: React.Dispatch<React.SetStateAction<any | null>>
};

const initialAuthContext: AuthContextType = {
    auth: null,
    setAuth: () => {},
  };
  
  export const AuthContext = createContext<AuthContextType>(initialAuthContext);
  
type AuthContextProps = {
    children: ReactNode,
}
export const AuthProvider = ({ children }:AuthContextProps) => {

    const [auth, setAuth] = useState<any>(null);
    return <AuthContext.Provider value={{auth , setAuth}}>
            {children}
        </AuthContext.Provider>;
    
}

export const useAuth = ():AuthContextType => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default {AuthProvider ,useAuth};