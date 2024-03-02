'use client'

import { createContext,useContext,useDebugValue , useState ,ReactNode} from "react";


  
  export const AuthContext = createContext<any>({});
  
type AuthContextProps = {
    children: ReactNode,
}
export const AuthProvider = ({ children }:AuthContextProps) => {

    const [auth, setAuth] = useState<any>(null);
    return <AuthContext.Provider value={{auth , setAuth}}>
            {children}
        </AuthContext.Provider>;
    
}

export const useAuth = ():any => {
    const { auth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default {AuthProvider ,useAuth};