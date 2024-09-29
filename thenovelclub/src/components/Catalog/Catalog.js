import { useBookContext } from "../../contexts/BookContext";
import { BookItem } from "./BookItem/BookItem";
import './Catalog.css';

export const Catalog = () => {

    const books = useBookContext();
    console.log(books)
    
    return (
        <>
        {books.length > 0 && (
            <h1 className="catalog-books">Books For Review</h1>
        )}
        <div className="catalog-page">
            <p>ihaaa</p>
            {books.map(x=> <BookItem key={x._id} {...x} />)}
        </div>
        {books.length === 0 && (
            <h1 className="catalog-books">No books for review</h1>
        )}
        </>
    )
}