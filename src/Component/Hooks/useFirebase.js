import { useEffect, useState } from "react"
import initializeAuthentication from "../../firebase/firebase.init";
import { getAuth, signInWithPopup,
    signOut, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";


initializeAuthentication();

const useFirebase=()=>{
    const[user,setUser]=useState({});
    const [error,setError]=useState('');



    const auth=getAuth()
    const googleProvider=new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    } 
    const logOut=()=>{
       signOut(auth)
       .then(()=>{
           setUser({});
       })
   }
   useEffect(()=>{
       onAuthStateChanged(auth,user=>{
           if(user){
               console.log(user);
               setUser(user)
           }
       })
   },[])
  
    return{
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;