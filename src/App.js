import React from 'react';
import Start from "./components/sign/Start";
import Login from "./components/sign/Login";
import Signup from "./components/sign/Signup";
import Home from "./components/main/Home"
import Test from "./components/main/Test"
import { Route, Routes } from 'react-router-dom';
import './components/style/App.css';
import Category from './components/main/Category';
import Favorite from './components/main/Favorite';
import Profile from './components/main/Profile';

const App = () => (
  <Routes>
    <Route path="/" element={<Start />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Category" element={<Category />} />
    <Route path="/Favorite" element={<Favorite />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path='/Test' element={<Test />} />
  </Routes>
);

export default App;
