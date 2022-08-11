import random from "../../functions/random";

function Briedis() {
    return (
        // react'e galima grazinti tik viena tag'a - vieno lygio, bet galima vieno tag'o 
        // viduje daug tag'u parasyt. React'e galima tuscia tag'a paduoti, kuri nepakeicia strukturos
        <>
            <h2 style={
                {
                    fontSize: random(15, 55) + 'px'
                }
            }>Hello also for Briedžiai!</h2>
            <h3 style={
                {
                    color: 'green'  //pirmi {} pereinam i JS, antri skliausteliai JS objektas, rasom taip tarsi tai butu JS
                }
            }>Bye, bye</h3>
        </>
    );
}

export default Briedis;