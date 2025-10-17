
import React from "react";
import './../styles/App.css';

const App = () => {
  const [summ, setSum] = useState(0);
  //   const [inputValue, setInputValue] = useState("");
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const total = numbers.reduce((a, b) => a + b, 0);
      setSum(total);
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        onChange={(e) => {
          //   setSum(summ + parseInt(e.target.value));
          if (e.target.value !== "") {
            setNumbers([...numbers, parseInt(e.target.value)]);
          }
        }}
      ></input>
      <p>sum: {summ}</p>
    </div>
  );
}

export default App
