import React, { useState } from "react";
const BmiCalculate = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBmi = (
        weight /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setMessage("You are underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setMessage("You have a normal weight");
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    } else {
      setBmi(null);
      setMessage("Please enter valid weight and height");
    }
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="input"
          />
        </div>
        <div className="formGroup">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="button">
          Calculate BMI
        </button>
      </form>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculate;
