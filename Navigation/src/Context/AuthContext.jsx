import {  createContext, useState } from "react";


export const AuthContext=createContext()


export function AuthContextProvider({children})
{
    const [token,settoken]=useState(null)
    const handlelogin=(value)=>{
        settoken(value)
    }

    const handlelogout=()=>{
        settoken(null)
        localStorage.removeItem("token")
    }
    return <AuthContext.Provider value={{token,handlelogin,handlelogout}}> {children} </AuthContext.Provider>
    

}