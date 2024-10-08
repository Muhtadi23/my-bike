/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null)

const auth = getAuth(app)

// children value will come from the auth change functions
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()


    /* function for creating where we take email and password as
    parameter and call createUserWithEmailAndPassword from firebase/auth */

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* function for login where we take email and password as
    parameter and call signInWithEmailAndPassword from firebase/auth */
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google SignIn with popup
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    /* function for logout where no parameter and call signOut from firebase/auth */
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // update Profile

    const updateUserProfile = (name, email, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, email: email, photoURL: photo,
        })
    }


    // auth state change when a user is created or logged out
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                // get Token and store client
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false)
                        }
                    })
            }
            else {
                // TODO Remove Token
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            // console.log('current User', currentUser)

        });
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])

    // auth_context values
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;