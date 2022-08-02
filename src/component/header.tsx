import React from "react";
import "../style/header.scss";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../shared/firebase";
import { Cookies } from "react-cookie";

const Header = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const onLogout = async () => {
    await signOut(auth);
    cookies.remove("X-ACCESS-TOKEN");
    navigate("/signin");
    alert("로그아웃 되었습니다.");
  };
  return (
    <div className="header">
      <div className="header-home" onClick={() => navigate("/home")}>
        <h1>todolist</h1>
      </div>
      <div className="header-button">
        <button className="bt-upload" onClick={() => navigate("/addboard")}>
          업로드
        </button>
        <button className="bt-logout" onClick={onLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Header;
