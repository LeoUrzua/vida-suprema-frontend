// Hook (use-auth.js)
/* eslint no-use-before-define: 0 */  // --> OFF
import React, { useState, useEffect, useContext, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

// Add your Firebase credentials
firebase.initializeApp({
    apiKey: "AIzaSyBMh7c88I5KJtQioApoQkrQg1pvNyxXGGw",
    authDomain: "vidasuprema-49d39.firebaseapp.com",
    databaseURL: "https://vidasuprema-49d39.firebaseio.com",
    projectId: "vidasuprema-49d39",
    storageBucket: "vidasuprema-49d39.appspot.com",
    messagingSenderId: "685294723356",
    appId: "1:685294723356:web:cb0da13ace9624ec829ad9"
});

const authContext = createContext({
    user: {
        id: 1
    },
    signout() {
        return null;
    }
});

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
// @ts-ignore
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    // @ts-ignore
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState(null);

    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const signin = (email: string, password: string) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => {
                // @ts-ignore
                setUser(response.user);
                return response.user;
            });
    };

    const signup = (email: string, password: string) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                // @ts-ignore
                setUser(response.user);
                return response.user;
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                // @ts-ignore
                setUser(false);
            });
    };

    const sendPasswordResetEmail = (email: string) => {
        return firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                return true;
            });
    };

    const confirmPasswordReset = (code: string, password: string) => {
        return firebase
            .auth()
            .confirmPasswordReset(code, password)
            .then(() => {
                return true;
            });
    };

    // Subscribe to user on mount
    // Because this sets state in the callback it will cause any ...
    // ... component that utilizes this hook to re-render with the ...
    // ... latest auth object.
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                // @ts-ignore
                setUser(user);
            } else {
                // @ts-ignore
                setUser(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // Return the user object and auth methods
    return {
        user,
        signin,
        signup,
        signout,
        sendPasswordResetEmail,
        confirmPasswordReset
    };
}