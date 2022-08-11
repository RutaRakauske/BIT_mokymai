import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"


function Button({setSquare, squareId, square}) {

    const [word, setWord] = useState('');
    const [color, setColor] = useState('');
    const [type, doType] = useState(false)
    const [size, setSize] = useState(100)
    const [select, setSelect] = useState(0)
    const textInput = useRef();

    const doIt = () => {
        setSquare(s => word.length > 3 ? [...s, {text: word, color: color, id: squareId.current++, show: true, type: type, size: size}] : [...s]);
        setWord('')
    }

    const doSort = () => {
        setSquare(s => [...s].sort((a, b) => b.text > a.text ? -1 : 1))
    
    }

    const doSortId = () => {
        setSquare(s => [...s].sort((a, b) => a.id - b.id))
    
    }
// uzdeti focusa ant input laukelio
    useEffect(() => {
        textInput.current.focus();

    }, [])

    useEffect(() => {
        if(0 === parseInt(size)){
            return;
        }
        setSquare(sq => sq.map(s => s.id !== parseInt(select) ? {...s} : {...s, size: parseInt(size)}))
    }, [size, select, setSquare])

    useEffect(() => {
        if(0 === parseInt(select)){
            return;
        }
        setSize(square.find(s => s.id === parseInt(select))?.size ?? 0)

    }, [select, square])


    const doGreen = () => {
        // setSquare(s => [...s].filter((s, i) => s.color === 'yellowgreen'))
        setSquare(s => s.map(el => ({...el, show: el.color === 'yellowgreen' ? true : false})))
    }

    const doRemoveFilter = () => {
        setSquare(s => s.map(el => ({...el, show: true})))
    
    }

    const doChange = () => {
        doType(r => !r);
    }

    return (
        <div>
            <fieldset>
                <legend>Color and Shape</legend>
            <div>Rosybrown<input type="radio" value="rosybrown" name="sameGroup" onChange={(event) => setColor(event.target.value)}/></div>
            <div>RoyalBlue<input type="radio" value="royalblue" name="sameGroup" onChange={(event) => setColor(event.target.value)}/></div>
            <div>YellowGreen<input type="radio" value="yellowgreen" name="sameGroup" onChange={(event) => setColor(event.target.value)}/></div>
            <div>Circle<input type="checkbox" checked={type} onChange={doChange}/></div>
            </fieldset>
            <input type="text" value={word} onChange={e => setWord(e.target.value)} ref={textInput} />
            <button onClick={doIt}>Square</button>
            <fieldset>
            <legend>Filter and sort</legend>
            <button onClick={doSort}>Sort</button>
            <button onClick={doSortId}>Sor By ID</button>
            <button onClick={doGreen}>Filter Green</button>
            <button onClick={doRemoveFilter}>Remove Filter</button>
            </fieldset>
            <fieldset>
                <legend>Dropdown</legend>
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="0">Select Square Text</option>
                    {
                        square.map((s, i) => <option value={s.id} key={s.id}>ID: {s.id} {s.text}</option>)
                    }
                </select>
            </fieldset>
            <fieldset>
                <legend>Range of size</legend>
                <input type="range" min="100" max="300" value={size} onChange={e => setSize(e.target.value)} step="10"/>
            </fieldset>

        </div>
    )
}

export default Button;