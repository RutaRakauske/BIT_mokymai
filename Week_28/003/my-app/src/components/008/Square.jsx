import { useState } from "react";
import random from '../../functions/random'
import randomColor from '../../functions/randomColor'

function Square() {

    const [sq, setSq] = useState([]);

    const makeIt = () => {
        setSq([...Array(random(5, 25))].map(_ => randomColor()));
    }

    return (
        <>
        <button onClick={makeIt}>Kvadratukai</button>
        <h2>Squares Group</h2>
        <div className="container">
            {
                sq.map((s, i) => <div className="sc" key={i} style={{
                    backgroundColor: s + '70',
                    borderColor: s
                }}></div>)
            }
        </div>
        </>
    );


}

export default Square;