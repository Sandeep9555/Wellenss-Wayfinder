import React from "react";
import "../Styles/BmiCalculator.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BmiCalculate from "../Components/BmiCalculate";
const BmiCalculator = () => {
  return (
    <>
      <Navbar />
      <BmiCalculate />
      <Footer />
    </>
  );
};

export default BmiCalculator;
