import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/header";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Addboard from "./pages/Addboard";
import UpDateList from "./pages/UpDateList";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <div className="todo">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/UpDateList" element={<UpDateList />} />
          <Route path="/addboard" element={<Addboard />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
