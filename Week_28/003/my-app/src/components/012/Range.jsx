import { useState } from "react";

function Range(){

    const [w, setW] = useState()

    return(
        <div>
            <input type="range" min="0" max="800" value={w} onChange={(event) => setW(event.target.value)} step="50"/>
        </div>
    );
}

export default Range;