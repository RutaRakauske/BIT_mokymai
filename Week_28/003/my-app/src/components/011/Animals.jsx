import { useState } from "react";
import { useEffect } from "react";

function Animal () {

    const [animalName, setAnimalN] = useState(null)
    const [animalAge, setAnimalA] = useState(null)
    const [textName, setName] = useState([])
    // const [textAge, setsetAge] = useState([])

    const animalN = (event) => {
        //event.target - html elementas kuriam ivyko pasikeitimas, value grazina reiksme to elemento
        console.log(event.target.value)
        setAnimalN(event.target.value)

    }

    const animalA = (event) => {
        //event.target - html elementas kuriam ivyko pasikeitimas, value grazina reiksme to elemento
        console.log(event.target.value)
        setAnimalA(event.target.value)

    }

    
    const addList = (event) => {
        //event.target - html elementas kuriam ivyko pasikeitimas, value grazina reiksme to elemento
        console.log(event.target.value)
        setName(n => [...n, {name: animalName, age: animalAge, row: n.length + 1}])
        // kad isvalyt input laukelis pasetinam tuscius states
        setAnimalN('')
        setAnimalA('')
    }

    useEffect(() => {
        setName(textName)
        //kitas budas iskart issifiltruoti ir paduoti jau gera array, netikrinti veliau idedant
        //setRandomL(MN.filter(d => d.left !== d.right))
        }, [textName])


    const doSorting = () => {
        setName(n => [...n].sort((a, b) => b.name > a.name ? -1 : 1));
    }


        // onChange event listener
        return(
            <div className="container">
                <fieldset>
                    <legend> Animal Details</legend>
                    <div>
                    <input type="text" value={animalName} onChange={animalN}></input>
                    </div>
                    <div>
                    <input type="text" value={animalAge} onChange={animalA}></input>
                    </div>
                    <button onClick={addList}>Add to list</button>
                </fieldset>
                <table>
                    <thead>
                        <th>No</th>
                        <th>Animal Name</th>
                        <th>Animal Age</th>
                    </thead>
                    {
                        textName?.map((el, i) => <tr key={i}><td>{el.row}</td><td>{el.name}</td><td>{el.age}</td></tr>)
                    }
                </table>
                <button onClick={doSorting}>Sort By Name</button>
            </div>


        )
    }
    
    export default Animal;