
function Square({square, setSquare, radius}) {


const deleteSq = (id) => {
    setSquare(s => s.filter(square => square.id !== id))
}

    return(
        <div className="container">{
            square.map((s, i) => ( s.show ? 
            <div className="sc-bigger" key={s.id} style={{backgroundColor: s.color, borderRadius: s.type ? "30%" : "5%", width: s.size + "px", height: s.size + "px"}}>
                <div>{s.text}</div>
                <div><span>ID: {s.id}</span></div>
                <button onClick={() => deleteSq(s.id)}>Delete</button>
            </div> : null))
        }</div>
    )
}

export default Square;