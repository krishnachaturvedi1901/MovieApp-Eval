import React from "react"

export const AuthContext =React.createContext()

const AuthContextProvider = ({children}) => {
  const [isAuth,setIsAuth]=React.useState(true)
  const toggleAuth=()=>{
    setIsAuth(!isAuth)
  }
  return (
  <AuthContext.Provider value={{isAuth,toggleAuth}}>
    {children}
  </AuthContext.Provider>
  )
};

export default AuthContextProvider;