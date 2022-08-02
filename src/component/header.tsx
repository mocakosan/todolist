import React from "react";
import "../style/header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1>todolist</h1>
      <div className="header-button">
        <button className="bt-upload">업로드</button>
        <button className="bt-join" onClick={() => navigate("/signup")}>
          회원가입
        </button>
        <button className="bt-login">로그인</button>
      </div>
    </div>
  );
};

export default Header;
