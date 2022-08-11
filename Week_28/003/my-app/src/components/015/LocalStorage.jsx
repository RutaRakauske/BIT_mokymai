import { useState } from "react"

function LocalStorage() {

    const [data, setData] = useState('')
    const [data2, setData2] = useState([])

const addToStorage = () => {
 localStorage.setItem('myCat', 'Tom')
 localStorage.setItem('myArray', JSON.stringify(['Tom', 'and', 'Jerry']))
}

const getFromStorage = () => {
    setData(localStorage.getItem('myCat'))
    setData2(JSON.parse(localStorage.getItem('myArray')))
   }
   
   const removeFromStorage = () => {
    setData(localStorage.removeItem('myCat'))
   }

    return (
        <>
        <h1>{data === null ? "Data not found" : data}</h1>
            {
                data2.map((d, i) => <span key={i}>{d}</span>)
            }
        <div className="container">
            <button onClick={addToStorage}>Add to storage</button>
            <button onClick={getFromStorage}>Get from storage</button>
            <button onClick={removeFromStorage}>Remove from storage</button>
        </div>
        </>

    )
}

export default LocalStorage;