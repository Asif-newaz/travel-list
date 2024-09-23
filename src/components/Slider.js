import { useState } from "react";

function Slider() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  const resetHandler = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div style={{ display: "block" }}>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span></span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={resetHandler}>Reset</button>
      ) : null}
    </div>
  );
}

export default Slider;
