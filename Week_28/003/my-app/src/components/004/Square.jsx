function Square({aukstis, plotis}) {

    return (
      <div className="square" style={{
      width: plotis > 100 ? 100 + 'px' : plotis + 'px',
      height: aukstis > 100 ? 100 + 'px' : aukstis + 'px'}}></div>  
    )
}

export default Square;