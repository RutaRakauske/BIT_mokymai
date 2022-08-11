import { useState } from 'react';

function Visual(){

    const [radius, setRadius] = useState("none");
    const [radius2, setRadius2] = useState("none");

    return (
        <div className='container'>
            <div className="sc" onClick={() => setRadius(s => s === "50%" ? "0%" : "50%")} style={{borderRadius: radius}}></div>
            <div className="round" onClick={() => setRadius2(s => s === "50%" ? "0%" : "50%")} style={{borderRadius: radius2}}></div>
        </div>
    )
}

export default Visual;