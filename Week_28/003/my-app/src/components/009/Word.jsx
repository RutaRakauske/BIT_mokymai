import { useEffect } from "react";
import { useState } from 'react';
import randomColor from "../../functions/randomColor";

function Word ({color}) {
    
    const [colorRand, setColor] = useState(null)

    useEffect(() => {
        setColor(color)
        }, [color])

    
        return(
            <>
                <h2 style={{color:colorRand}}>Pingvinas</h2>
                <button onClick={() => setColor(randomColor())}>ChangeColor</button>
            </>
        )
    }
    
    export default Word;