import { useState } from 'react';
import randomColor from '../../functions/randomColor';

function HelloWorld2() {

    const HW = 'Hello World';

    // Turetu buti useEffect
    const HWA = [...Array(HW.length)].map((_, i) => ({l:HW[i], c: randomColor()}));
    //

    const [hw, setHw] = useState(HWA);

    const doColor = () => {
        setHw([...Array(HW.length)].map((_, i) => ({l:HW[i], c: randomColor()})));
    }

    return (
        <h2 onClick={doColor}>
            {
                hw.map((letter, i) => <span key={i} style={{color: letter.c}}>{letter.l}</span>)
            }
        </h2>
    )

}

export default HelloWorld2;