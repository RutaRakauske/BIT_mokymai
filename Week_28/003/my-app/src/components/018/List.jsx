import { useContext, useState } from 'react';
import BooksContext from './BooksContext';

function List({books, types}){

    const { addToCart } = useContext(BooksContext);
    const [count, setCount] = useState(1);

    const addToCartLocal = (id, c) => {
        setCount(1);
        addToCart(id, c);
    }

    return(
        <li className="white-container">
                <p className="bookName">{books.title} </p>
                <img src={books.img} alt="Book cover"></img>
                <p className="type">{types ? types.find(type => books.type === type.id)?.title : '---loading---'}</p>
                <p className="author">{books.author} </p>
                <p className="price">{books.price} EUR</p>
                <button onClick={() => addToCartLocal(books.id, count)}>Pirkti</button>
        </li>
    );
}

export default List;