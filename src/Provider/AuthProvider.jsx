import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
//   Google Login 
const googleProvider = new GoogleAuthProvider();
const googleLogin = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider);
};

  // create  user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signup page a email varification
const emailVerification = () => {
  return sendEmailVerification(auth.currentUser);
};

//   const emailVerification = () => {
//     return sendEmailVerification(auth.currentUser);
//   };

  //   Sign In page

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // forget password

  const forget = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // sign Out

  const logOut = () => {
    return signOut(auth);
  };



  //

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    googleLogin,
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    emailVerification,
    setSuccess,
    success,
    forget,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;