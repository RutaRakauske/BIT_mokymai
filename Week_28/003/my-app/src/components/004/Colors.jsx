function Colors({fonoSpalva, tekstoSpalva}) {

    return (
        <div style={{
            color: fonoSpalva === tekstoSpalva ? 'red' : tekstoSpalva ,
            backgroundColor: fonoSpalva === tekstoSpalva ? 'gray' : fonoSpalva}}>Katinukai patys kiečiausi!</div>
    )
}

export default Colors;