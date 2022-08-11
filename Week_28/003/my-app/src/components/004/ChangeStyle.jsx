function ChangeStyle({forma}) {
    
    return (
        <div className="sc" style={{borderRadius: forma === 'square' ? '0' : forma === 'circle' ? '50%' : null}}></div>
    )
}

// kitas budas - ilgesnis siek tiek
// if (forma === "square") {
//     return (
//         <div className="sc"></div>
//     )
// } else if (forma === "circle"){
//     return (
//         <div className="sc" style={{borderRadius: '50%'}}></div>
//     )
// } else {
//     return null;
// }

export default ChangeStyle;