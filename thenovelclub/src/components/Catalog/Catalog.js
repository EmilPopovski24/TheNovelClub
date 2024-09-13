import { BookItem } from "./BookItem/BookItem"

export const Catalog = ({
    books
}) => {
    
    return (
        <>
        {books.length > 0 && (
            <h1 className="catalog-books">Books For Review</h1>
        )}
        <div className="catalog-page">
            {books.map(x=> <BookItem key={x._id} {...x} />)}
        </div>
        {books.length === 0 & (
            <h1 className="catalog-books">No books for review</h1>
        )}
        </>
    )
}