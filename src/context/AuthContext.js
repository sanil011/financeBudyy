import React,{useState,useEffect,} from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {collection,query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase"

export const AuthContext=React.createContext();

export function AuthProvider({children}){
    const [user,setUser]=useState("");
    const [userDetails,setUserDetails]=useState({});
    const [loading,setLoading]=useState(true)

    function signup(email,password)
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password)
    {
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth);
    }

    useEffect(()=>{
       const unsub=auth.onAuthStateChanged((use)=>{
           setUser(use);
           setLoading(false)
       })
       return ()=>{
           unsub();  
       } 
    },[])

    useEffect(()=>{
        (async ()=>{
            if(user)
            {
                const d=query(collection(db,"users"),where("email","==",user.email));
                const querySnapshot=await getDocs(d);
                querySnapshot.forEach((doc)=>{
                    setUserDetails(doc.data());
                })
            }
            if(!user) setUserDetails({});
        })();
    },[user])
    const store={
        user,
        userDetails,
        signup,
        login,
        logout,
        loading,
        setLoading
    }

    return(
        <AuthContext.Provider value={store}>
            {children}
        </AuthContext.Provider>
    )
}