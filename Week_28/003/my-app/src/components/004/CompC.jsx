import D from './CompD'

function C({count}) {

    return (
        <div className="container">
            {
                [...Array(count)].map((_, i) => <D key={i}></D>)
            }
        </div>
    )
}

export default C;