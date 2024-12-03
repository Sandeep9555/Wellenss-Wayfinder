import React from "react";
import Footer from "../Components/Footer";
import Chatbot from "../Components/Chabot";
import Navbar from "../Components/Navbar";
import MediChat from "./Medichat";

const Medicine = () => {
  return (
    <div className="medcine-section">
      <Navbar />
      <Chatbot />
      <MediChat />
      <Footer />
    </div>
  );
};

export default Medicine;
