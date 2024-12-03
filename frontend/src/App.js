import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Gym from "./Pages/Gym";
// import Nutrition from "./Pages/Nutrition";
import Medicine from "./Pages/Medicine";
import About from "./Pages/About";
import Reviews from "./Pages/Reviews";
import Login from "./Pages/Login";

import SignUp from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import Logout from "./Pages/Logout";
import BmiCalculator from "./Pages/BmiCalculator";

function App() {
  return (
    <div className="App">
      <Router basename="/wellness-wayfinder">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gym" element={<Gym />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/bmicalculator" element={<BmiCalculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
