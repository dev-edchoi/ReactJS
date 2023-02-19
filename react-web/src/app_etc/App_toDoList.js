//import Button from "./Button";
//import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray,toDo]);
    setToDo("");
  };
  /* method 1
  const delToDo = (idx) => {
    const li = idx.target.parentElement;
    console.log(idx)
    li.remove();
  }
  */ 
  const delToDo2 = (idx) =>{
    setToDos(toDos.filter((item, toDoIdx) => idx !== toDoIdx));
  }
  /*
    filter 함수에 두 번째 인자는 toDos 배열에 있는 index 요소가 들어간다.
    onClick = {() => deleteBtn(index)} 형태로 쓰는 이유는 "바로 실행"이 아닌 클릭을 기다리는 함수로 쓰기 위함이라고 함.
    
    출처 : https://nomadcoders.co/react-for-beginners/lectures/3287
    참고 : https://codesandbox.io/s/competent-heyrovsky-pgh5o?file=/src/App.js
  */

  return (
    <div>
      <h1>My ToDos</h1>
      <h3>ToDos : ({toDos.length})</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to doe.."
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item} <button onClick={() => delToDo2(index)}>❌</button></li>
        ))}
        {
        /* method 1
        {toDos.map((item, index) => (
          <li key={index}>{item} <button onClick={delToDo}>❌</button></li>
        ))}
        */
      }
      </ul>
    </div>
  );
}

export default App;
