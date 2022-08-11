import { useState } from "react"

function Radio() {


    const [radio, setRadio] = useState('')

    const doRadio = (event) => {
        setRadio(event.target.value)
    }


    return (

        
        // name naudojamas nurodyti radio button grupes, tuomet grupeje tik viena radio button bus galima pazymet, kita pazymejus atsizymes
        <>
        <fieldset>
            <div>A<input type="radio" value="A" name="sameGroup" checked={'A'=== radio} onChange={doRadio}/></div>
            <div>B<input type="radio" value="B" name="sameGroup" checked={'B'=== radio} onChange={doRadio}/></div>
            <div>C<input type="radio" value="C" name="sameGroup" checked={'C'=== radio} onChange={doRadio}/></div>
            <div>D<input type="radio" value="D" name="sameGroup" checked={'D'=== radio} onChange={doRadio}/></div>
        </fieldset>

        </>

    )
}

export default Radio;