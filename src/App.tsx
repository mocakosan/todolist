import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/header";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
