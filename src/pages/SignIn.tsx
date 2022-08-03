import React, { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../shared/firebase";
import { useNavigate } from "react-router-dom";
import "../style/signin.scss";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [user, setUser] = useState({});
  const onLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/home");
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div className="signin">
      <h3>Login</h3>
      <input
        placeholder="Email"
        onChange={(e) => {
          setLoginEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setLoginPassword(e.target.value);
        }}
      />
      <div className="signin-bt">
        <button onClick={onLogin}>Login</button>
        <button onClick={() => navigate("/signup")}>회원가입하러가기</button>
      </div>
    </div>
  );
};

export default SignIn;
