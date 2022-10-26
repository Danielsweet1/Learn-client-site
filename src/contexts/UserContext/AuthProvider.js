import React from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const GoogleProvider = new GoogleAuthProvider()
  const GithubProvider = new GithubAuthProvider()

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUser = (name, photoUrl) => {
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL : photoUrl
    });
  };

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider)
  }

  const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, GithubProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);

  const authInfo = { createUser, login, user,loading, updateUser,logout,googleSignIn,githubSignIn };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
