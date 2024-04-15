import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../Utilities/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    const signInwithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInwithGoogle


    }



    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;