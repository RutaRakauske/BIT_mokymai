
function Red({setVisual, color, red, textColor}){


    return (
        <>
            <div className="sc" style={{backgroundColor: color}}></div>
            <button onClick={() => setVisual(s => !s)}>ChangeShape</button>
            <h2 style={{color: textColor}}>{red}</h2>
        </>
    )
}

export default Red;