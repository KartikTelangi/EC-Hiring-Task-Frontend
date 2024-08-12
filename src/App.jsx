import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Registration />}/>
          <Route path="/register" element={<Registration />}/>
          <Route path="/login" element={ <Login />}/>
          <Route path="/product" element={ <Product />}/>
           
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
