import { useState } from "react"

function Bla() {

    const [word, setWord] = useState('');
    const [text, setText] = useState('');
    const [color, setColor] = useState('');
    const [wordColor, setWordColor] = useState('');

    const doIt = () => {
        setWord(text);
        setWordColor(color);
    }


    return (
        <div>
        <h2 style={{color: wordColor}}>{word}</h2>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <input type="color" value={color} onChange={e => setColor(e.target.value)} />
        <button onClick={doIt}>Do</button>
        </div>
    )
}

export default Bla;