import { useState } from "react";
import random from '../../functions/random'

function HelloWorld() {

    const [space, setSpace] = useState(0)

    const setRandSpace = () => {
        setSpace(random(-3, 20))
    }

    return (
        <>
            <h2 onClick={setRandSpace} style={{letterSpacing: space + 'px'}} >Hello World!</h2>
        </>
    )
}

export default HelloWorld;