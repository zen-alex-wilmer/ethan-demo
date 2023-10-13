import { useState } from "react";
import "./App.css";

window.onmousemove = (e) => {
  document.body.style.backgroundColor = `hsl(${e.clientY}, 50%, 50%)`;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ethan wants to learn to code and do other stuff</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          ethan's iq: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
