import React, { useEffect, useState } from "react";
import "../style/home.scss";
import { collection, getDocs, doc, deleteDoc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../shared/firebase";
import { useNavigate } from "react-router-dom";
import { Card, IconButton, Button, CardContent } from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { CardActionArea } from "@material-ui/core";

const Home = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<any>([{}]);
  //데이터 가져오기
  useEffect(() => {
    const getList = async () => {
      const listCollectionRef = collection(db, "todolist");
      const todoSnap = await getDocs(listCollectionRef);
      const data: any = todoSnap.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }));
      setList(data);
    };
    getList();
  }, []);
  console.log(list);
  //데이터 삭제
  const onDelete = async (id: any) => {
    await deleteDoc(doc(db, "todolist", id));
    const listCollectionRef = collection(db, "todolist");
    const todoSnap = await getDocs(listCollectionRef);
    const data: any = todoSnap.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }));
    setList(data);
  };
  return (
    <div className="todo-wrapper">
      {list.map((item: any) => (
        <Card className="todo-body" key={item.id}>
          <CardActionArea>
            <CardContent className="todo-title">
              <h1>제목</h1>
              <h1>{item.title}</h1>
            </CardContent>
            <CardContent className="todo-content">
              <h2>오늘의 할일</h2>
              <h2>{item.content}</h2>
            </CardContent>
            <CardContent className="todo-bt">
              <Button
                variant="contained"
                color="secondary"
                endIcon={<DeleteIcon />}
                onClick={() => {
                  onDelete(item.id);
                }}
              >
                삭제
              </Button>
              <Button
                variant="contained"
                color="primary"
                endIcon={<UpgradeIcon />}
                onClick={() => {
                  navigate("/UpDateList", { state: { board: item } });
                }}
              >
                수정
              </Button>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Home;
