import randomColor from "../../functions/randomColor";

function B3({setColorB3}){


    return (
        <>
            <button onClick={() => setColorB3(randomColor)}>RandomColor</button>
        </>
    )
}

export default B3;