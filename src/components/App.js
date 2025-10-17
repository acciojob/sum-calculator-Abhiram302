import React, { useState, useEffect } from "react";
import "./../styles/App.css";

export default function SumCalculator() {
  const [sum, setSum] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Recalculate sum asynchronously whenever numbers array changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((a, b) => a + b, 0);
      setSum(total);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    if (inputValue !== "") {
      setNumbers([...numbers, parseInt(inputValue)]);
      setInputValue(""); // clear input for next number
    }
  };

  return (
    <div id="main">
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add Number</button>

      <p>Sum: {sum}</p>
    </div>
  );
}