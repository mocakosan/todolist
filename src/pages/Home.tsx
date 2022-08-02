import React from "react";
import "../style/home.scss";
import all from "../all.png";

const Home = () => {
  return (
    <div className="todo-wrapper">
      <div className="todo-body">
        <img src={all} alt="" />
        <div className="todo-title">
          <h1>제목</h1>
        </div>
        <div className="todo-content">
          <h2>내용</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
