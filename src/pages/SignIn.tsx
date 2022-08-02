import React from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const SignIn = () => {
  return (
    <div className="signin">
      <input />
      <input />
      <button>로그인</button>
    </div>
  );
};

export default SignIn;
