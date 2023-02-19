//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("i run only once ");
  }, []);

  useEffect(() => {
    console.log("when 'keyword' is change");
  }, [keyword]);

  useEffect(() => {
    console.log("when 'counter' is change");
  }, [counter]);

  useEffect(() => {
    console.log("both change");
  }, [counter,keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click here</button>
    </div>
  );
}

export default App;
