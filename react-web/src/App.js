//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hi, I'm Create");
    return () => console.log("Bye, I'm destroyed...");
  }, []);
  return <h1>HI!!</h1>
}

function App() {
  const [showing, setShwoing] = useState(false);
  const onClick = () => setShwoing((current) => !current);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
