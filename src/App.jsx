import React from 'react';
import NavbarMain from './components/NavbarMain';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import SideBar from './components/SideBar';
import Pages from './components/Pages';
import MainData from './components/MainData';
import Sbar from './components/Sbar';

function App() {
  let isAuthenticate = JSON.parse(localStorage.getItem("isAuthenticate"));
  console.log("isAuthenticate===================", isAuthenticate);
  return (
    <>
      <Routes>

        <Route path="/sbar" element={<Sbar />} />

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainData />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>


      </Routes>

    </>
  );
}

export default App;

