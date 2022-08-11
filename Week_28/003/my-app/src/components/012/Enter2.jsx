import { useState } from "react"
import Click from "./Click";

function Enter2({setH1}) {

    const [word, setWord] = useState('');
    // const [text, setText] = useState('');

    const getWord = (e) => {
        setWord(e.target.value)
    }

    return (
        <>
        <input type="text" value={word} onChange={getWord} />
        <Click word={word} setText={setH1}></Click>
        </>

    )
}

export default Enter2;