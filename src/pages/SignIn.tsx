import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../shared/firebase";
import { useNavigate } from "react-router-dom";
import "../style/signin.scss";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SignIn = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [user, setUser] = useState({});

  const onLogin = async () => {
    try {
      const auth = getAuth();
      const user: any = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate("/home");
      console.log(user.user);
      localStorage.setItem("login-token", user.user.accessToken);
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
