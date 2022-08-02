import React, { useState } from "react";
import "../style/addboard.scss";
import { dbService } from "../shared/firebase";

const Addboard = () => {
  const [image, setImage] = useState("");
  const [title, setTile] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = async (event: any) => {
    event.preventDefault();
    await dbService.collection("todolist").add({
      image,
      title,
      content,
      createAt: Date.now(),
    });
    setImage("");
    setTile("");
    setContent("");
  };
  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setImage(value);
    setTile(value);
    setContent(value);
  };
  return (
    <form className="addboard-wrapper">
      <div className="addboard-body">
        <input type="file" value={image} onChange={onChange} />
        <div className="addboard-title">
          <h1>제목</h1>
          <input type="text" value={title} onChange={onChange} />
        </div>
        <div className="addboard-content">
          <h2>오늘의 할일</h2>
          <input type="text" value={content} onChange={onChange} />
        </div>
        <button onClick={onSubmit}>추가하기</button>
      </div>
    </form>
  );
};

export default Addboard;
