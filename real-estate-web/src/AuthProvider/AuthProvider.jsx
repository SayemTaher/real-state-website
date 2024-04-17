/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { updateProfile } from "firebase/auth";
import auth from "../Utilities/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
   

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

    const createUser = (email, password, name, photoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                if (result && result.user && (name || photoUrl)) {
                    return updateProfile(result.user, {
                        displayName: name,
                        photoURL: photoUrl
                    }).then(() => {
                        setUser({...result.user, displayName: name, photoURL: photoUrl});
                         
                    });
                }
            })
            .catch(error => {
                console.error('Error creating user:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    
    

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    
    

    const signInwithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signInWithGitHub = ()=>{
        setLoading(true)
        return signInWithPopup(auth,gitHubProvider)
    }
    const updateUserProfile = (displayName, photoURL) => {
        if (user) {
            setLoading(true);
            updateProfile(user, { displayName, photoURL })
                .then(() => {
                    toast.success("Profile updated!");
                    setLoading(false);
                })
                .catch(error => {
                    toast.error("Error updating profile: ", error);
                    setLoading(false);
                });
        }
    };
    const AuthInfo = {
        user,
        loading,
        createUser,
        signInWithGitHub,
        updateUserProfile,
        signIn,
        logOut,
        signInwithGoogle


    }



    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        <ToastContainer></ToastContainer>
        </AuthContext.Provider>
    );
};

export default AuthProvider;