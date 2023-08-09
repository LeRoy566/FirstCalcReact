import { useRef, useState } from "react";
import "./App.css";
const TANK_HP = 200;
function App() {
  const [heal_point, setHeal_point] = useState(TANK_HP);
  const input = useRef(0);
  const input1 = useRef(0);
  const reset = () => {
    setHeal_point(TANK_HP);
  };
  const fire = () => {
    setHeal_point((prev) => {
      const newHP = prev - +input.current;
      if (newHP <= 0) {
        alert("Dead");
        return 0;
      } else {
        return newHP;
      }
    });
  };
  const add = () => {
    setHeal_point((prev) => {
      const newHP1 = prev + +input1.current;
      if (newHP1 >= 200) {
        alert("FullHP");
        return 200;
      } else {
        return newHP1;
      }
    });
  };
  return (
    <div className="App">
      <input
        onChange={(e) => {
          input.current = e.target.value;
        }}
      />
      <button onClick={fire}>Fire</button>
      <p>HP: {heal_point}</p>
      <input
        className="input1"
        onChange={(e) => {
          input1.current = e.target.value;
        }}
      />
      <button onClick={add}>ADD</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
