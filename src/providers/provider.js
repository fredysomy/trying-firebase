import React,{useState,useEffect,createContext} from 'react'
import {auth} from '../services/signin'
export const UserContext=createContext({user:null})
export default (props)=>{
    const [user,setUser]=useState(null)
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            const {name,email}=user
            setUser({name,email})
        })
    },[])
    return(
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}