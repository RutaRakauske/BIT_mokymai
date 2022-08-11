import { useState } from 'react';

function Visual({radius, colorB3}){

    const [border, setBorder] = useState("none");

    return (
        <>
            <div className="sc" style={{borderRadius: radius ? "50%" : null, backgroundColor: colorB3, border: border}}></div>
            <button onClick={() => setBorder(s => s === "none" ? "2px red solid" : "none")}>Border</button>
        </>
    )
}

export default Visual;