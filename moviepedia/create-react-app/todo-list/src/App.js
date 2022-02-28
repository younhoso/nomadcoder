import {useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return
    }
    setToDos(currentArray => [...currentArray, toDo]);
    setToDo("");
  }

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do...."/>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => {
         return <li key={idx}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
