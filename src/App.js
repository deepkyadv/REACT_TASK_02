import React from 'react';
import './App.css';
import {incNum, decNum} from "./actions/index"
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>

      <div className="counter-container">
        <button className="counter-button" onClick={()=>dispatch(decNum())}>Decrement</button>
        <input className="counter-input" type="number" value={myState} readOnly />
        <button className="counter-button" onClick={()=> dispatch(incNum())}>Increment</button>
      </div>
    </div>
  );
}

export default App;
