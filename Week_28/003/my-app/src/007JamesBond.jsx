import './App.scss';
import Blue from './components/007JamesBond/Blue';
import Green from './components/007JamesBond/Green';
import { useState } from 'react';
import Red from './components/007JamesBond/Red';
import Brown from './components/007JamesBond/Brown';
import Yellow from './components/007JamesBond/Yellow';
import random from './functions/random'
import Visual from './components/007JamesBond/Visual';
import B1 from './components/007JamesBond/B1';
import B2 from './components/007JamesBond/B2';
import B3 from './components/007JamesBond/B3';



function App() {

    const [count, setCount] = useState(0)
    const [visual, setVisual] = useState(false);
    const [color, setColor] = useState('green');
    const [red, setRed] = useState(0);
    const [red2, setBrown] = useState(0);
    const [textColor, setTColor] = useState("black");
    const [textColor2, setTColor2] = useState("black");
    const [radius, setRadius] = useState(false);
    const [colorB3, setColorB3] = useState("white");

const setRandom = () => {
    const rand1 = random(1, 5)
    const rand2 = random(1, 5)
    setTColor(rand1 > rand2 ? "red" : rand1 === rand2 ? "black" : "grey")
    setTColor2(rand1 < rand2 ? "red" : rand1 === rand2 ? "black" : "grey")
    setRed(s => s + rand1);
    setBrown(s => s + rand2);
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>State Uplifting</h1>
        <Blue setCount={setCount}></Blue>
        <Green count={count}></Green>
        <Red setVisual={setVisual} color={color} red={red} textColor={textColor}></Red>
        <Brown visual={visual} setColor={setColor} red2={red2} textColor={textColor2}></Brown>
        <Yellow setRandom={setRandom}></Yellow>
        <B1 setRadius={setRadius}></B1>
        <B2 setRadius={setRadius}></B2>
        <B3 setColorB3={setColorB3}></B3>
        <Visual radius={radius} colorB3={colorB3}></Visual>
      </header>
    </div>
  );
}

export default App;