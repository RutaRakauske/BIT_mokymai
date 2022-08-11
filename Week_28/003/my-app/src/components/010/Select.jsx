import { useState } from "react";

const selectData = [
    {value: 1, text: "One"},
    {value: 2, text: "Two"},
    {value: 5, text: "Five"},
    {value: 1000000, text: "One Million"}
];

function Select () {

    const [select, setSelect] = useState(5)
    const [color, setColor] = useState(null)
    const [colorNew, setColorNew] = useState('')
    const [count, setCount] = useState(0)

    const selectHandler = (event) => {
        //event.target - html elementas kuriam ivyko pasikeitimas, value grazina reiksme to elemento
        console.log(event.target.value)
        setSelect(event.target.value)
        setCount(c => c + 1)

    }

    const changeColor = () => {
        setColor(s => colorNew)
    }

    const changeColorNew = (event) => {
        setColorNew(n => [...n].filter((n) => n.left < 10))
    }

        // onChange event listener
        return(
                <fieldset>
                    <legend style={{color: color}}>Selected: <b>{select} {selectData.find(s => select === s.value).text}</b></legend>
                    <select value={select} onChange={selectHandler}>
                        {
                            selectData.map((el, i) => <option value={el.value} key={i}>{el.text}</option>)
                        }
                        {/* <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="5">Five</option>
                        <option value="1000000">One Million Money</option> */}
                    </select>
                    <div>Select count: {count}</div>
                    <div>
                    <input type="text" value={colorNew} onChange={changeColorNew}></input>
                    </div>
                    <button onClick={changeColor}>Change Color</button>
                </fieldset>
        )
    }
    
    export default Select;