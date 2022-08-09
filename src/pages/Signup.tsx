import React, { useState } from "react";
import { auth, db } from "../shared/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import "../style/signup.scss";
import { SignUpDto } from "../dto/authDto";

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const onJoin = async () => {
    const auth = getAuth();
    const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    console.log(user);
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
        type="password"
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
