import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile, GoogleAuthProvider, signOut, sendPasswordResetEmail } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); 

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const userLogin =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile);
    }

    const resetUserPassword =(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const logoutUser =()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {user, createUser, updateUserProfile, logoutUser, userLogin, resetUserPassword, loginWithGoogle, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;