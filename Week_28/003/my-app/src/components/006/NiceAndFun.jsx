import { useState } from "react";
import random from '../../functions/random'
import randomColor from "../../functions/randomColor";
import Sq4 from "./Sq4";
import Sq5 from "./Sq5";
import Sq6 from "./Sq6";

function NiceAndFun({spalva}) {
      

    const [size, setSize] = useState(26)//hook
        //size - state, setSize - funkcija kuri keicia state
    const [bgColor, setColor] = useState("greenyellow")
    const [randNo, setCount] = useState(1)
    const [square, setSquare] = useState([])
    const [squareColor, setSquareColor] = useState([])
    const [randomCoNo, setRandom] = useState([])
    const [countSquare, setSquareCount] = useState([])
    const [circleSquare, setCircle] = useState([])
    const [square6, setSq6] = useState([])

    const doSize = () => {
        // setSize(56);
        setSize(size === 26 ? 56 : 26)
    }

    const doBackground = () => {
        // setColor("white")
        setColor(s => s === "greenyellow" ? "white" : "greenyellow")
    }

    const countNo = () => {
        setCount(randNo + random(5, 10))
    }

    const kvadratas = () => {
        setSquare(s => [...s, ''])
        // this.setState(state => ({kvadratas: [...state.kvadratas, '']}));
    }

    const randColor = () => {
        setSquareColor(s => [...s, randomColor()])
    }

    const allRandom = () => {
        setRandom(s => [...s, {color: randomColor(), number: random(10, 99)}])
    }

    const squareCount = () => {
        setSquareCount(s => [...s, ''])
    }

    const circle = () => {
        setCircle(s => [...s, ''])
    }

    const sq6 = () => {
        setSq6(s => [...s, ''])
    }

    return (
        <>
        <h2 style={{color: spalva, fontSize: size + 'px', backgroundColor: bgColor}}>Braškė</h2>
        <h2>{randNo}</h2>
        <div className='container'>
                {square.map((_, i) => <div className="sc" key={i}>{i + 1}</div>)}
            </div>
        <div className="container">
            {squareColor.map((color, i) => <div className="sc" key={i} style={{backgroundColor: color}}></div>)}
        </div>
        <div className="container">
            {randomCoNo.map((object, i) => <div className="sc" key={i} style={{backgroundColor: object.color}}>{object.number}</div>)}
        </div>
        <div className="container">
            {countSquare.map((_, i) => <Sq4 key={i}></Sq4>)}
        </div>
        <div className="container">
            {circleSquare.map((_, i) => <Sq5 key={i}></Sq5>)}
        </div>
        <div className="container">
            {square6.map((_, i) => <Sq6 key={i}></Sq6>)}
        </div>
        <div className="container">
            <button onClick={doSize}>Size</button>
            <button onClick={doBackground}>Bg Color</button>
            <button onClick={countNo}>Count</button>
            <button onClick={kvadratas}>Kvadratukas</button>
            <button onClick={randColor}>Rand Color</button>
            <button onClick={() => setSquare([])}>Remove</button>
            <button onClick={() => setSquareColor(s => s.filter((_, i) =>  i))}>Remove First</button>
            <button onClick={allRandom}>Everything random</button>
        </div>
        <div className="container">
            <button onClick={squareCount}>Count + 1</button>
            <button onClick={circle}>CircleSquare</button>
            <button onClick={sq6}>CircleCount</button>
        </div>
        </>
    )
}

export default NiceAndFun;