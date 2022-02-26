import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const iRunOnlyOnce = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value)
  useEffect(() => {
    console.log('나는 최초에 한번만 실행돼요')
  }, [])

  useEffect(() => { // 키워드 state가 변할때 실행하고 싶은 시점
    console.log('나는 키워드가 변화할 때 실행돼요')
  }, [keyword])

  useEffect(() => { // 카운터 state가 변할때 실행하고 싶은 시점
    console.log('나는 카운터가 변화할 때 실행돼요')
  }, [counter])

  useEffect(() => { // 원한다면 두개의 state 값이 변할때 실행하고 싶은 시점(두 개의state를 합칠수도 있다.)
    console.log('나는 키워크와 카운터가 변화할 때 실행돼요!!')
  }, [keyword, counter])

  return (
    <div className="App">
      <input onChange={onChange} value={keyword} placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={iRunOnlyOnce} text="Continue"/>
    </div>
  );
}

export default App;
