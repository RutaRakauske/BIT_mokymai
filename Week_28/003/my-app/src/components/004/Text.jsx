function Text({zodis, zenklas, spalva}) {
    // 3 skritingi budai perduoti propsus:
// 1. galima taip aprasyti props'us
// const {zodis, zenklas} = props;
// return (
//     <i>{zodis}{zenklas}</i>
// )
// 2. function Text(props) {...<i>{props.zodis}{props.zenklas}<i/>}
// 3.
    return (
        <i style={{color: spalva}}>{zodis}{zenklas}</i>
    )
}

export default Text;