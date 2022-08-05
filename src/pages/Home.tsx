import React, { useEffect, useState } from "react";
import "../style/home.scss";
import all from "../all.png";
import { collection, getDocs, doc, deleteDoc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../shared/firebase";

const Home = () => {
  const [list, setList] = useState([{}]);
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
    const todoDoc = doc(db, "todolist", id);
    await deleteDoc(todoDoc);
  };
  return (
    <div className="todo-wrapper">
      {list.map((item: any) => (
        <form className="todo-body" key={item.id}>
          <div className="todo-title">
            <h1>제목</h1>
            <h1>{item.title}</h1>
          </div>
          <div className="todo-content">
            <h2>오늘의 할일</h2>
            <h2>{item.content}</h2>
          </div>
          <button
            onClick={() => {
              onDelete(item.id);
            }}
          >
            삭제
          </button>
        </form>
      ))}
    </div>
  );
};

export default Home;
