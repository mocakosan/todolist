import React, { useState } from "react";
import { auth, db } from "../shared/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "../style/signup.scss";
import { collection, addDoc } from "firebase/firestore";
import { SignUpDto } from "../dto/authDto";

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const onJoin = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup">
      <input
        placeholder="Email"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      <button onClick={onJoin}>회원가입</button>
    </div>
  );
};

export default Signup;
