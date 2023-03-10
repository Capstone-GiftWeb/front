import React from 'react';
import Start from "./components/sign/Start";
import Login from "./components/sign/Login";
import Signup from "./components/sign/Signup";
import Home from "./components/main/Home"
import { Route, Routes } from 'react-router-dom';
import './components/style/App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Home" element={<Home />} />
  </Routes>
);

export default App;
