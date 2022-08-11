import './App.scss';
import { useState } from "react"
import Button from './components/013/Button';
import Square from './components/013/Square';
import { useRef } from 'react';

function App() {

const [square, setSquare] = useState([]);

const squareId = useRef(1);//hook - kintamojo aprasymas, kuriame saugojam kintamuosius ir jie nesikeis, bus sena reiksme. Atiduoda objekta

  return (
    <div className="App">
      <header className="App-header">
        <h1>Repeat 2</h1>
        <Button setSquare={setSquare} squareId={squareId} square={square}></Button>
        <Square square={square} setSquare={setSquare}></Square>
      </header>
    </div>
  );
}

export default App;