import random from "../../functions/random";
import BlueCircle from "./BlueCircle";
import RedCircle from "./RedCircle";

function Bebras() {
    return (
        <>
            <h2>Hello {random(10, 20)}, Bebrai!</h2>
            {random(0, 1) ? <RedCircle/> : <BlueCircle/>}   
            {random(0, 1) ? <RedCircle/> : null}          
        </>

    )
}


export default Bebras;

// Javacsript rasom tarp {} skliaustu, turi but viena eilute ir grazinti kazka, ka galima atspausdinti. Galima iskviesti funkcija