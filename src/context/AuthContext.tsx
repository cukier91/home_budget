import { createContext,useContext,useState,Dispatch,SetStateAction } from "react";

interface AuthContextType {
    userId:string;
    setUserId: Dispatch<SetStateAction<string>>
}

const AuthContext = createContext<AuthContextType|undefined>(undefined);
 
const getUserId=()=>{
  const item=localStorage.getItem("user");
  if(item!==null){
    return item
  }
  return "";
}
export const AuthProvider = ({ children }:{children:React.ReactNode}) => {
    const [userId, setUserId] = useState(getUserId());
  
  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId
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