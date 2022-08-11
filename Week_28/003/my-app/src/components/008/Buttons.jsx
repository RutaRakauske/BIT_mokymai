
function Buttons({setView}){

    return (
        <div className="container">
            <button onClick={() => setView(1)}>B1</button>
            <button onClick={() => setView(2)}>B2</button>
            <button onClick={() => setView(3)}>B3</button>
            <button onClick={() => setView(4)}>B4</button>
        </div>
    )
}

export default Buttons;