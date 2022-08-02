import React from "react";
import "../style/home.scss";
import all from "../all.png";

const Home = () => {
  return (
    <form className="todo-wrapper">
      <div className="todo-body">
        <img src={all} alt="" />
        <div className="todo-title">
          <h1>제목</h1>
        </div>
        <div className="todo-content">
          <h2>오늘의 할일</h2>
        </div>
        <div className="todo-time">
          <h3>time</h3>
        </div>
      </div>
    </form>
  );
};

export default Home;
