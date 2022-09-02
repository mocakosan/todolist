import React, { useRef, useState } from "react";
import "../style/addboard.scss";
import { db } from "../shared/firebase";
import { addDoc, collection, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Input, Card, Button } from "@mui/material";
import SaveIcon from "@material-ui/icons/Save";

const Addboard = () => {
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState<string>("");
  const [newContent, setNewContent] = useState<string>("");
  const listRef: any = collection(db, "todolist");
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await addDoc(listRef, {
        title: newTitle,
        content: newContent,
        token: localStorage.getItem("login-token"),
      });
      navigate("/home");
    } catch (e) {
      console.error("Error adding document:", e);
    }
  };

  return (
    <div className="addboard-wrapper">
      <Card className="addboard-body">
        <div className="addboard-title">
          <h1>제목</h1>
          <Input
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
            type="text"
          />
        </div>
        <div className="addboard-content">
          <h2>오늘의 할일</h2>
          <Input
            onChange={(event) => {
              setNewContent(event.target.value);
            }}
            type="text"
          />
        </div>
        <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={onSubmit}>
          추가하기
        </Button>
      </Card>
    </div>
  );
};

export default Addboard;
