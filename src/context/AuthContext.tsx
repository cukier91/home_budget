import { createContext,useContext,useState,Dispatch } from "react";

interface AuthContextType {
    isAuthorized:boolean;
    setIsAuthorized: (isAutorized:boolean)=>void
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);
 
export const AuthProvider = ({ children }:{children:React.ReactNode}) => {
    const [isAuthorized, setIsAuthorized] = useState(()=>{
    //TODO: problemy z parsowaniem moga byc bo czasem getItem moze byc nullem
        return JSON.parse(localStorage.getItem("user")||"")
  });
  
  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        setIsAuthorized
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
 
export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
 
  if (!ctx) {
    throw new Error("Missing userContext, it's not wrapped in UserProvider");
  }
  return ctx;
}