import { useEffect } from "react";
import { useState } from 'react';
import random from '../../functions/random'

function Numbers ({MN}) {
    
    const [randL, setRandomL] = useState(null)

    useEffect(() => {
        setRandomL(MN)
        //kitas budas iskart issifiltruoti ir paduoti jau gera array, netikrinti veliau idedant
        //setRandomL(MN.filter(d => d.left !== d.right))
        }, [MN])

    
const createRandom = () => {
    const left = random(0, 45)
    const right = random(0, 45)
    if (left !== right) {
        setRandomL(n => [...n, {left, right}])
    }
}

const sortLeft = () => {
    setRandomL(n => [...n].sort((a, b) => b.left - a.left))

}

const sortRight = () => {
    setRandomL(n => [...n].sort((a, b) => b.right - a.right))

}

const sortBigger = () => {
    setRandomL(n => [...n].filter((n) => n.left > 20))

}

const sortLess = () => {
    setRandomL(n => [...n].filter((n) => n.left < 10))

}
    
        return(
            <>
            <table>
                <thead>
                    <th>Left</th>
                    <th>Right</th>
                </thead>
                    {
                        //randL? - klaustukas patikrina ar randL yra null reiksme, jei yra tai null ir palieka, 
                        //daugiau nieko nedaro. Jei ne null daro tolimesnius zingsnius
                        randL?.map((el, i) => el.right !== el.left ? <tr key={i}><td>{el.left}</td><td>{el.right}</td></tr> : null)
                    }
                </table>
                <div className="container">
                    <button onClick={createRandom}>Random</button>
                    <button onClick={sortLeft}>Sort Left</button>
                    <button onClick={sortRight}>Sort Right</button>
                    <button onClick={sortBigger}>Sort Left Bigger 20</button>
                    <button onClick={sortLess}>Sort Left Less 10</button>
                </div>
            </>
        )
    }
    
    export default Numbers;