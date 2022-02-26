import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const iRunOnlyOnce = () => {
    setValue((prev) => prev + 1)
  };

  useEffect(() => {
    iRunOnlyOnce()
  }, [])
  return (
    <div className="App">
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={iRunOnlyOnce} text="Continue"/>
    </div>
  );
}

export default App;
