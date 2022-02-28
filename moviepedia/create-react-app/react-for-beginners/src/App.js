import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return function() {
      console.log("bye :(");
    }
  }, []);

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  },[])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div className="App">
      {showing ? <Hello /> : null}
      <Button onClick={onClick}>{showing ? "Hide" : "Show"}</Button>
    </div>
  );
}

export default App;
