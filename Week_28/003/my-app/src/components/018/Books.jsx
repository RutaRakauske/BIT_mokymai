import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import List from "./List";
import BooksContext from './BooksContext';

//instaliuojam axios(npm i axios), nes reikes fetch funkcijos
function Books() {

    const [books, setBooks] = useState(null)
    const [types, setTypes] = useState(null)
    const [typeSelect, setTypeSelect] = useState(0)
    const [cart, setCart] = useState([]);


    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => setBooks(res.data.map((b, i) => ({ ...b, show: true, row: i }))));
    }, [])

    useEffect(() => {
        axios.get('https://in3.dev/knygos/types/')
            .then(res => setTypes(res.data));
    }, [])
    //ziurim kada pasikeis paselectintas tipas
    useEffect(() => {
        console.log(typeSelect)
        setBooks(b => b?.map(book => ({ ...book, show: (typeSelect === 0 || typeSelect === book.type) ? true : false })))
    }, [typeSelect])


    const doSorting = () => {
        setBooks(n => [...n].sort((a, b) => b.price - a.price));
    }

    const doSortingAsc = () => {
        setBooks(n => [...n].sort((a, b) => a.price - b.price));
    }

    const doRemove = () => {
        setBooks(s => [...s].sort((a, b) => a.row - b.row))

    }

    const removeItem = id => {
        setCart(c => c.filter(item => item.id !== id));
    }

    const addToCart = (id, count) => {

        setCart(c => {
            const inCart = c.find(b => b.id === id);
            if (!inCart) {
                return [...c, {id, count: count}]
            }
            return c.map(b => b.id === id ? {...b, count: b.count + count} : {...b});
        });
    }

    return (
        <>
            <BooksContext.Provider value={{
                addToCart
            }}>
            <div className="cart-bin">
                <div className="cart">
                    <span>{cart.length}</span>
                    <svg>
                        <use href="#cart"></use>
                    </svg>
                    <div className="cart-list">
                        {
                            cart.map((b, i) => <div key={i}>
                                {books?.find(bo => bo.id === b.id).title}
                                <i>{b.count}</i>
                                <b onClick={() => removeItem(b.id)}>X</b>
                            </div>)
                        }
                    </div>

                </div>
            </div>
            <div className="container">
                {types ?
                    <select onChange={e => setTypeSelect(parseInt(e.target.value))} value={typeSelect}>
                        <option value="0">Visos</option>
                        {
                            types?.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                        }
                    </select> : null}
                <button onClick={doSorting}>Sort By Price Desc</button>
                <button onClick={doSortingAsc}>Sort By Price Asc</button>
                <button onClick={doRemove}>Default</button>
            </div>
            <ul className="books-container">
                {
                    books ? books.map(b =>
                        b.show ?
                            <List books={b} key={b.id} types={types} />
                            : null
                    ) : <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>//jeigu ilgai loadina uzdedam loadinimo progress paveiksliuka
                }
            </ul>
            </BooksContext.Provider>
        </>

    )
}

export default Books;