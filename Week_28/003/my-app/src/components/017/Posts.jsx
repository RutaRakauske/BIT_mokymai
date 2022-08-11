import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const perPage = 20;

//instaliuojam axios(npm i axios), nes reikes fetch funkcijos
function Posts(){

    const [posts, setPosts] = useState(null)
    const [users, setUsers] = useState(null)

    const [pages, setPages] = useState(0)
    const [pageNo, setPageNo] = useState(1)



    useEffect(() => {

        const doShow = (i) => {
            return ((pageNo - 1) * perPage <= i) && ((pageNo * perPage) > i);
        }

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data.map((p, i) => ({...p, show: doShow(i)})));
        })
    }, [pageNo])

    useEffect(() => {

        const doShow = (i) => {
            return ((pageNo - 1) * perPage <= i) && ((pageNo * perPage) > i);
        }

        // if(null === posts){
        //     return;
        // }
        setPosts(po => po?.map((p, i) => ({...po, show: doShow(i)})));
    }, [pageNo])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));
    }, [])

    useEffect(() => {
        if(null === posts || 'undefined' === typeof posts){
            return;
        }
        setPages(Math.ceil(posts.length/perPage))
    }, [posts])

    const doSorting = () => {
        setPosts(n => [...n].sort((a, b) => b.title.length - a.title.length));
    }

    const doRemove = () => {
        setPosts(s => [...s].sort((a, b) => a.id - b.id))
    
    }

    // const doPage = (event) => {
        
    //     //event.target - html elementas kuriam ivyko pasikeitimas, value grazina reiksme to elemento
    //     console.log(event.target.value)
    //     setPosts(p => [...p].filter(p => p.id >= ((event.target.value * perPage) - perPage) && p.id <= (event.target.value * perPage)))

    // }

    return(
        <>
            <select onChange={e => setPageNo(parseInt(e.target.value))} value={pageNo}>
                {
                    [...Array(pages)].map((_, i) => <option key={i} value={i + 1}>{i + 1} page</option>)
                }
            </select>
        <ol>
            {
                posts ? posts.map(p => p.show ? <li key={p.id}>Title: {p.title} User: {
                    users ? users.find(usr => p.userId === usr.id)?.name : '---loading---'
                }</li> : null) : <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>//jeigu ilgai loadina uzdedam loadinimo progress paveiksliuka
            }
        </ol>
        <button onClick={doSorting}>Sort Title Length</button>
        <button onClick={doRemove}>Default</button>
        </>

    )
}

export default Posts;