import { useState } from "react";

function Text () {

    const [text, setText] = useState('')
    const [color, setColor] = useState('')

    const inputHandler = (event) => {
        //event.target - html elementas kuriam ivyko pasikeitimas, value grazina reiksme to elemento
        console.log('nice', event.target.value)
        setText(event.target.value)

    }

    const colorChange = (event) => {
        //event.target - html elementas kuriam ivyko pasikeitimas, value grazina reiksme to elemento
        console.log('nice', event.target.value)
        setColor(event.target.value)

    }
        // onChange event listener
        return(
                <fieldset>
                    <legend style={{color: color}}>{text !== '' ? text : 'text'}</legend>
                    <input type="text" value={text} onChange={inputHandler}/>
                    <div></div>
                    <input type="color" onChange={colorChange}></input>
                </fieldset>
        )
    }
    
    export default Text;