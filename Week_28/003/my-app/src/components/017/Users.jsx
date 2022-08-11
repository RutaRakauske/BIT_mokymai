import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

//instaliuojam axios(npm i axios), nes reikes fetch funkcijos
function Users(){

    const [users, setUsers] = useState(null)


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));
    }, [])

    const doSorting = () => {
        setUsers(n => [...n].sort((a, b) => b.name > a.name ? -1 : 1));
    }

    const doRemove = () => {
        setUsers(s => [...s].sort((a, b) => a.id - b.id))
    
    }

    return(
        <>
        
        <ul>
            {
                users ? users.map(u => (<li className="users-list" key={u.id}>
                <b>{u.name}</b>
                <i>{u.address.city}</i>
                <i>{u.company.name}</i>
                </li>)) : <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>//jeigu ilgai loadina uzdedam loadinimo progress paveiksliuka
            }
        </ul>
        <button onClick={doSorting}>Sort By Name</button>
        <button onClick={doRemove}>Default</button>
        </>

    )
}

export default Users;