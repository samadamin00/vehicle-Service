import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Machanic from "./pages/Machanic/Machanic";
import Contact from "./pages/Contact/Contact";
import Sign from "./components/Tab/SignUp";
import Login from "./components/Tab/Login";
import { NotFound } from "./pages/RouteNoMatch";

import NavigationBar from "./components/SideBar/NavigationBar";
import AdminLogin from "./components/adminLogin/AdminLogin";

import "./App.css";
import AuthContext from "./context/auth/context";

function App() {
  //const [isAdmin, setIsAdmin] = useState(false);

  //const handleAdminLogin = () => {
  //  setIsAdmin(false); // Set isAdmin state to true when admin logs in
  //};

  const { isAdmin } = useContext(AuthContext);

  return (
    <>
      {isAdmin ? (
        <>
          <Routes>
            <Route path="/*" element={<NavigationBar />} />
          </Routes>
        </>
      ) : (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Mechanic" element={<Machanic />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin_login" element={<AdminLogin />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
