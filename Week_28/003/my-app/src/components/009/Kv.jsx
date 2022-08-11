// import { useEffect } from "react";

function Kv ({kv, i}) {
// kai gimsta komponentas, viena vieninteli karta
// useEffect(() => {
//         console.log('Atsirado', i);
// }, [i])

//kai mirsta komponentas
// useEffect(() => {
//     return () => {
//         console.log('Dingo', i);
//     }
// }, [i])

    return(
        <div className="sc" style={{backgroundColor: kv}}>{i}</div>
    )
}

export default Kv;