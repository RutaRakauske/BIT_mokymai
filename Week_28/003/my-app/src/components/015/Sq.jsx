import { useEffect } from "react";
import { useState } from "react"
import random from "../../functions/random"


function Sq({setCounter}) {

    const [square, setSquare] = useState([]);

    const doIt = () => {
        setSquare(s => [...s, {color: 'orange', radius: random(0, 1) === 0 ? 5 : 50, size: random(100, 150), row: s.length, show: true}, 
        {color: 'yellowgreen', radius: random(0, 1) === 0 ? 5 : 50, size: random(100, 150), row: s.length + 1, show: true}]);
    }
//Suskaičiuoti ir parašyti kiek yra kvadratukų o kiek apskritimukų
    useEffect(() => {
        setCounter(s => [
            square.reduce((accumulator, object) => {
                if(object.radius === "50%"){
                    return accumulator + 1;
                }
                return accumulator;
            }, 0), square.reduce((accumulator, object) => {
                if(object.radius === "5%"){
                    return accumulator + 1;
                }
                return accumulator;
            }, 0)
        ])
    }, [square, setCounter])


    const doSort = () => {
        setSquare(s => [...s].sort((a, b) => b.size - a.size))
    
    }

    const removeSort = () => {
        setSquare(s => [...s].sort((a, b) => a.row - b.row))
    
    }

    const filterC = () => {
        // setSquare(s => [...s].filter((s, i) => s.color === 'yellowgreen'))
        setSquare(s => s.map(el => ({...el, show: el.radius === 50 ? true : false})))
    }

    const filterS = () => {
        // setSquare(s => [...s].filter((s, i) => s.color === 'yellowgreen'))
        setSquare(s => s.map(el => ({...el, show: el.radius === 5 ? true : false})))
    }

    const removeFilter = () => {
        setSquare(s => s.map(el => ({...el, show: true})))
    
    }

    const sortSizeShape = () => {
        // setSquare(s => [...s].filter((s, i) => s.color === 'yellowgreen'))
        setSquare(s => [...s].sort((a, b) => b.radius - a.radius || b.size - a.size))
    }

        return(
            <>
            <div className="container">
            <button onClick={doIt}>Add</button>
            <button onClick={doSort}>Sort by Size</button>
            <button onClick={removeSort}>Remove Sort</button>
            <button onClick={filterC}>Filter Circles</button>
            <button onClick={filterS}>Filter Squares</button>
            <button onClick={removeFilter}>Remove Filter</button>
            <button onClick={sortSizeShape}>Sort by size and shape</button>
            </div>
            <div className="container">
                {
                    square.map((s, i) => s.show ? <div className="sc" key={i} style={{backgroundColor: s.color, borderRadius: s.radius + "%", width: s.size + 'px', height: s.size + 'px'}}></div> : null)
                }
            </div>
            </>

        )
    }
    
    export default Sq;