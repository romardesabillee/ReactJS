import { useState, Fragment, useEffect, useRef, useCallback } from 'react'
import './App.css'
import useCounter from './hooks/useCounter';
import Memo from './component/Memo';
import Letter from './component/Letter';
import Salary from "./component/Salary";

function App() {
  const {increment, count, decrement} = useCounter();
  const [letter, setLetter] = useState('a');
  const [salary, setSalary] = useState(20000);

  const changeLetter = useCallback(() => {
    setLetter(String.fromCharCode((Math.floor(Math.random() * 25) + 97)));
  }, []);
   

  const changeSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Memo />
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Letter letter={letter} setLetter={changeLetter} />
      <Salary salary={salary} setSalary={changeSalary}/>
    </div>
  )
}

export default App
