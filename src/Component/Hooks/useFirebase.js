import { useState } from "react"
import initializeAuthentication from "../../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


initializeAuthentication();

const useFirebase=()=>{
    const{user,setUser}=useState({});
    const auth=getAuth()
    const googleProvider=new GoogleAuthProvider();
    const googleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
    }
}