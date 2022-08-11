
function Click({word, setText}) {

    const doIt = () => {
        setText(word)
    }

    return (
        <button onClick={doIt}>Do</button>
    )
}

export default Click;