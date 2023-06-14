import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperatorClick = (operator) => {
    if (operator === "=") {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult("Error");
      }
    } else if (operator === "C") {
      setInput("");
      setResult(0);
    } else if (operator === "del") {
      setInput(input.slice(0, -1));
    } else if (operator === "%") {
      setResult(eval(input) / 100);
    } else if (operator === "+/-") {
      setInput(input.charAt(0) === "-" ? input.slice(1) : "-" + input);
    } else {
      setInput(input + operator);
    }
  };

  return (
    <div>
      <div className="calculator-container">
        <h1>Simple Calculator</h1>
        <input type="text" value={input} readOnly />
        <h2>Result: {result}</h2>

        <div>
          <button onClick={() => handleOperatorClick("C")} className="op-btn">
            C
          </button>
          <button onClick={() => handleOperatorClick("del")} className="op-btn">
            DEL
          </button>
          <button onClick={() => handleOperatorClick("+/-")} className="op-btn">
            +/-
          </button>
          <button onClick={() => handleOperatorClick("%")} className="op-btn">
            %
          </button>
        </div>
        <div>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick("/")} className="op-btn">
            /
          </button>
        </div>
        <div>
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperatorClick("*")} className="op-btn">
            *
          </button>
        </div>
        <div>
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleOperatorClick("-")} className="op-btn">
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={() => handleOperatorClick(".")}>.</button>
          <button onClick={() => handleOperatorClick("=")} className="op-btn">
            =
          </button>
          <button onClick={() => handleOperatorClick("+")} className="op-btn">
            +
          </button>
        </div>
      </div>
      <div>
        <h3>Made By: HASSAN ALI</h3>
      </div>
    </div>
  );
};

export default Calculator;
