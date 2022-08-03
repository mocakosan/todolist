import React, { useRef, useState } from "react";
import "../style/addboard.scss";
import { db } from "../shared/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Addboard = () => {
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");
  const listRef = collection(db, "todolist");
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const doc = await addDoc(listRef, {
        title: newTitle,
        content: newContent,
        createAt: Date.now(),
      });
      console.log(doc.id);
      navigate("/home");
    } catch (e) {
      console.error("Error adding document:", e);
    }
  };

  return (
    <form className="addboard-wrapper">
      <div className="addboard-body">
        <input name="imag" type="file" />
        <div className="addboard-title">
          <h1>제목</h1>
          <input
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
            type="text"
          />
        </div>
        <div className="addboard-content">
          <h2>오늘의 할일</h2>
          <input
            onChange={(event) => {
              setNewContent(event.target.value);
            }}
            type="text"
          />
        </div>
        <button onClick={onSubmit}>추가하기</button>
      </div>
    </form>
  );
};

export default Addboard;
