import React from "react";
import "../style/header.scss";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../shared/firebase";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const navigate = useNavigate();
  const onLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate("/signin");
    alert("로그아웃 되었습니다.");
  };
  return (
    <div className="header">
      <div className="header-home">
        <h1>todolist</h1>
      </div>
      <div className="header-button">
        <AddIcon className="bt-upload" onClick={() => navigate("/addboard")} />
        <LogoutIcon className="bt-logout" onClick={onLogout} />
        <PersonIcon className="bt-user" onClick={() => navigate("/mypage")}></PersonIcon>
      </div>
    </div>
  );
};

export default Header;
