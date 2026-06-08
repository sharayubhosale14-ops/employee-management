import {
 createContext,
 useState
} from "react";

export const AuthContext =
 createContext<any>(null);

export function AuthProvider({
 children,
}: any) {
 const [token, setToken] =
  useState(
   localStorage.getItem("token")
 );

 return (
  <AuthContext.Provider
   value={{
    token,
    setToken,
   }}
  >
   {children}
  </AuthContext.Provider>
 );
}