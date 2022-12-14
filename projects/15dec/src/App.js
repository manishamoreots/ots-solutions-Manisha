import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import TraineesComponent from "./components/TraineesComponent";
import ContactUs from "./components/ContactUs";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div className="App">
      <h1>OTS Solutions</h1>
      <MenuBar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/services" element={<CardComponent />} >
        </Route>
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/trainees" element={<TraineesComponent />} />
      </Routes>
    </div>
  );
}

export default App;
