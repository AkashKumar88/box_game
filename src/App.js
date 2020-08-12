import React, { useState, useEffect } from 'react';
import './App.css';
import Game from './components/Game';

function App() {

  const [position, setPosition] = useState(0);
  const [goal, setGoal] = useState('');
  const [point, setPoint] = useState(0);
  const [previousPositions, setPreviousPositions] = useState([]);

  useEffect(()=>{
    const randomNumber =  Math.floor(Math.random() * 70) + 1;
    if(goal === position){
      localStorage.setItem('goal', randomNumber);
      localStorage.setItem('point', point+1);
      setGoal(randomNumber);
      setPoint(point => point+1);
    }else if(localStorage.getItem('goal') && goal !== position){
      const rememberGoal = parseInt(localStorage.getItem('goal'));
      setGoal(rememberGoal);  
    }else {
      setGoal(randomNumber);
      localStorage.setItem('goal', randomNumber);
    }

},[position]);



  const startGame =() => {
      // const randomNumber =  Math.floor(Math.random() * 70) + 1
      const rememberPos = parseInt(localStorage.getItem('position'));
      // const rememberGoal = parseInt(localStorage.getItem('goal'));
      const rememberPoint = parseInt(localStorage.getItem('point'));

      if(rememberPos && rememberPos <= 70){
        setPosition(parseInt(rememberPos));
      }else{
        setPosition(1);
      }

      if(rememberPoint){
        setPoint(parseInt(rememberPoint));
      }else {
        setPoint(0);
      }
      
  }

  const resetGame =() => {
    const randomNumber =  Math.floor(Math.random() * 70) + 1
    setPosition(1);
    setPoint(0);
    setGoal(randomNumber);
    localStorage.setItem('position', 1);
    localStorage.setItem('goal', randomNumber);
    localStorage.setItem('point', 0);
  
  }
  
  const onButtonClick=(newPosition) => {
    localStorage.setItem('position', newPosition);
    setPosition(newPosition);
    if(previousPositions.length < 5){
      setPreviousPositions([...previousPositions, newPosition]);
    }else if(previousPositions.length === 5){
      const arr = [...previousPositions].filter((el,i) => i !== 0);
      setPreviousPositions([...arr, newPosition]);
    }
  }

  const onUndoClick =() => {
    const arr = [...previousPositions].filter((el,i) => i !== (previousPositions.length-1));
    if(arr.length){
      localStorage.setItem('position', arr[arr.length-1]);
      setPosition(arr[arr.length-1]);
      setPreviousPositions(arr);
    }
  }

  return (

    <div className="grid-container">
      <header className="header">
        <div> <button type="button" className="button_start" onClick={resetGame}>Reset</button></div>
        <div style={{color : "green", fontSize: "3rem", fontWeight: "bolder"}}>Player Navigation Game</div>
        <div> <button type="button" className="button_start" onClick={startGame}>
            {localStorage.getItem('position') ? 'Click to Resume' : 'Click to Start'}</button>
        </div>
      </header>

    <main className="main">
       <Game  onButtonClick={onButtonClick} position={position} goal={goal}/>
    </main>

    <footer className="footer">
        <div> <button type="button" className="button_start" onClick={onUndoClick}>undo</button></div>
        <div className="point"><div>Point: {point}</div></div>
    </footer>
  </div>
  );
}

export default App;
