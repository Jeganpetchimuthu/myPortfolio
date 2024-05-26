import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Footer from "./Footer";
//https://mern-store-gold.vercel.app/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
