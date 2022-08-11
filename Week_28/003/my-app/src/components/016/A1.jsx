import { useContext } from "react";
import ContextAbc from "./ContextAbc";

function A1() {
//vaikinis elemetas
const {text} = useContext(ContextAbc)

    return(
    <h1>{text}</h1>
    )
}

export default A1;