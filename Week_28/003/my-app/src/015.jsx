import './App.scss';
import Sq from './components/015/Sq';
import { useState } from "react"
import LocalStorage from './components/015/LocalStorage';


function App() {

    const [counter, setCounter] = useState([0, 0])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Total Recall </h1>
        <div>Circles: {counter[0]} Squares: {counter[1]}</div>
        <Sq setCounter={setCounter}></Sq>
        <LocalStorage></LocalStorage>
      </header>
    </div>
  );
}

export default App;