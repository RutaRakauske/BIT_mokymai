import { useState } from "react"

function Checkbox() {

    const [cb, setCB] = useState(true);
    
    const [shape, setShape] = useState(true);

    return (
        <>
        <fieldset>
            <legend>Checkbox</legend>
            <div>Red<input type="checkbox" checked={cb} onChange={() => setCB(b => !b)}/></div>
            <div>ChangeShape<input type="checkbox" checked={shape} onChange={() => setShape(a => !a)}/></div>
        </fieldset>

        <div className="blue-circle" style={{backgroundColor: cb ? "blue" : "red", borderRadius: shape ? "5%" : "50%"}}></div>
        </>

    )
}

export default Checkbox;