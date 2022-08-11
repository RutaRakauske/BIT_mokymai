import { useEffect } from "react";
import { useState } from "react";

function Checkbox () {

    const [cb, setCb] = useState({A: true, B: false, C: false, D: true})
    const [text, setText] = useState([])

    const doChange = (event) => {
        setCb(c => ({...c, [event.target.value]: !c[event.target.value]}));
    }

    useEffect(() => {
        const checked = [];
        for (const a in cb) {
            if (cb[a] === true){
                checked.push(a)
            }
          }
          setText(checked)
    }, [cb])


    // obj.labas = 55
    // turim kintamaji p='labas'
    // jei norim pakeisti objekte reiksme labas, galima rasyt taip: obj[p] = 55
        return(
            <fieldset>
                <legend>Checkbox marked: {text.map((el, i) => <span key={i}>{el}</span>)}</legend>
                <div>A<input type="checkbox" value="A" checked={cb.A} onChange={doChange}/></div>
                <div>B<input type="checkbox" value="B" checked={cb.B} onChange={doChange}/></div>
                <div>C<input type="checkbox" value="C" checked={cb.C} onChange={doChange}/></div>
                <div>D<input type="checkbox" value="D" checked={cb.D} onChange={doChange}/></div>
            </fieldset>
        )
    }
    
    export default Checkbox;