import { useState } from "react"

function Enter({setText}) {

    const [text, setWord] = useState('');

    const doIt = () => {
        setText(text)
    }


    return (
        <div>
        <input type="text" value={text} onChange={e => setWord(e.target.value)} />
        <button onClick={doIt}>Do</button>
        </div>
    )
}

export default Enter;