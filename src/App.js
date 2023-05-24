import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Start from "./components/sign/Start";
import Login from "./components/sign/Login";
import Signup from "./components/sign/Signup";
import Home from "./components/main/Home"
import Category from './components/main/Category';
import Profile from './components/main/Profile';
import Search from './components/main/Search';

import './components/style/App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Category" element={<Category />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/Search" element={<Search />} />
  </Routes>
);

export default App;
