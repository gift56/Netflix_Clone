import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvdier } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvdier>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvdier>
    </>
  );
}

export default App;
