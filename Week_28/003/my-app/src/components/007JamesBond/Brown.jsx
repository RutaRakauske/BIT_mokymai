import randomColor from "../../functions/randomColor";

function Brown({visual, setColor, textColor, red2}) {

    return (
        <>
            <div className="sc" style={{borderRadius: visual ? '50%' : null}}></div>
            <button onClick={() => setColor(randomColor)}>ChangeColor</button>
            <h2 style={{color: textColor}}>{red2}</h2>
        </>

    );
}

export default Brown;
