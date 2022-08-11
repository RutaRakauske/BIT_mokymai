import { useState } from 'react';
import { useReducer } from 'react';
import './App.scss';
import count from './Reducers/count';
import kv from './Reducers/kv';

function App() {

    //number - state, dispatcheris - issiuntejas
const [number, dispatchNumber] =useReducer(count, 0)
const [kvNo, dispatchKv] = useReducer(kv, [])
const [numberVal, setNumberVal] = useState('')
const [kvNumber, setKvNumber] = useState([])

const add1 = () =>{
    const action = {
        type: 'plus_one'
    }
    dispatchNumber(action);
} 

const rem1 = () =>{
    const action = {
        type: 'minus_one'
    }
    dispatchNumber(action);
} 

const do0 = () =>{
    const action = {
        type: 'reset'
    }
    dispatchNumber(action);
} 

const addKv = () =>{
    const action = {
        type: 'plus_one',
        payload: kvNumber
    }
    dispatchKv(action);
} 

const remKv = () =>{
    const action = {
        type: 'minus_one'
    }
    dispatchKv(action);
} 

const defaultKv = () =>{
    const action = {
        type: 'default'
    }
    dispatchKv(action);
} 

const addSome = () =>{
    const action = {
        type: 'add_some',
        payload: numberVal//tas skaicius kuri reikia prideti, kuri irasom i input laukeli
    }
    dispatchNumber(action);
} 

const remSome = () =>{
    const action = {
        type: 'rem_some',
        payload: numberVal//tas skaicius kuri reikia prideti, kuri irasom i input laukeli
    }
    dispatchNumber(action);
} 


const sortA = () => {
    const action = {
        type: 'sort_a',
    }
    dispatchKv(action);

}

const sortD = () => {
    const action = {
        type: 'sort_d',
    }
    dispatchKv(action);

}

const even = () => {
    const action = {
        type: 'even',
    }
    dispatchKv(action);

}

const notEven = () => {
    const action = {
        type: 'noteven',
    }
    dispatchKv(action);

}

const all = () => {
    const action = {
        type: 'all',
    }
    dispatchKv(action);

}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hook useReducer</h1>
        <h2>Number now is {number}</h2>
        <label>Insert number +/-<input className='c-input' type="text" value={numberVal} onChange={e => setNumberVal(e.target.value.length <= 2 ? e.target.value : numberVal)}></input></label> 
        <div className='container'>
        <button onClick={addSome}>Add amount</button>
        <button onClick={remSome}>remove amount</button>
        </div>
        <div className='container'>
            <button onClick={add1}>+1</button>
            <button onClick={rem1}>-1</button>
            <button onClick={do0}>0</button>
        </div>
        <div className='container'>
        {
            kvNo.map((s, i) => s.show ? <div className='sc' key={i}>{s.number}</div> : null)
        }
        </div>
        <label>Insert kvadratukas number<input className='c-input' type="text" value={kvNumber} onChange={e => setKvNumber(e.target.value.length <= 2 ? e.target.value : kvNumber)}></input></label> 
        <div className='container'>
            <button onClick={addKv}>+KV</button>
            <button onClick={remKv}>-KV</button>
            <button onClick={defaultKv}>RemoveKV</button>
            <button onClick={sortD}>Sort desc</button>
            <button onClick={sortA}>Sort asc</button>
            <button onClick={even}>Lyginiai</button>
            <button onClick={notEven}>Nelyginiai</button>
            <button onClick={all}>All</button>

        </div>
      </header>
    </div>
  );
}

export default App;