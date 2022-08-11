import './App.scss';
import { useState } from 'react';
import Kv from './components/009/Kv';
import randomColor from './functions/randomColor';
import { useEffect } from 'react';
import Word from './components/009/Word';
import Numbers from './components/009/Numbers';


function App() {

const magicNumbers = [
        {left: 5, right: 11},
        {left: 45, right: 0},
        {left: 4, right: 22},
        {left: 13, right: 13}
];

const [kvadratukai, setKvadratukai] = useState([])
const [count, setCount] = useState(0)

const add = () => {
    setKvadratukai(k => [...k, randomColor()]);
    // console.log('Kvadratukas pridetas')
}

useEffect(() => {
    if (count > 10){
        setCount(0)
    }
    console.log('Nera 10', count)
}, [count])

useEffect(() => {
    if (kvadratukai.length > 10) {
        setKvadratukai([])
    }
    console.log('Kvadratukas pridetas', kvadratukai.length)
}, [kvadratukai])

useEffect(() => {
    if (kvadratukai.length === 4 && kvadratukai[3] !== 'black') {
        setKvadratukai(kvadratukai.map((c, i) => i === 3 ? 'black' : c));
    }
    console.log('Kvadratukas pridetas', kvadratukai.length)
}, [kvadratukai])

//paspaudus mygtuka konsoleje paraso kvadratukas pridetas

  return (
    <div className="App">
      <header className="App-header">
        <h1>Use Effect Hook</h1>
        <div className='container'>
        {
            kvadratukai.map((kv, i) => <Kv key={i} kv={kv} i={i}></Kv>)
        }
        </div>

        <button onClick={add}>Add kvadratukas</button>
        
        <div className="container">
            <div className="sc" onClick={setCount}>{count}</div>
        </div>
        <button onClick={() => setCount(s => s + 1)}>Count</button>
        <Word color={'orange'}></Word>
        <Numbers MN={magicNumbers}></Numbers>
      </header>
    </div>
  );
}

export default App;