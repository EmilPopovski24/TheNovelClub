import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookServiceFactory } from "../services/bookService"

export const BookContext = createContext();

export const BookProvider = ({
    children,
}) => {

    const bookService = bookServiceFactory();
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    
    useEffect(()=> {
        if(books.length > 0) {
            bookService.getAll()
            .then(result => {
                setBooks(result);
            })
        } 
    },[]);

    const onAddBookSubmit = async(bookData) => {
        const newBook = await bookService.addBook(bookData);
        setBooks(state => [...state, newBook])
        navigate("/catalog")
    }

    const onBookEditSubmit = async (values) => {
        const result = await bookService.edit(values._id, values);
        setBooks(state => state.map(x=> x._id === values._id ? result: x))
        navigate(`/catalog/${values._id}`)
        return result
    }

    const contextValues = {
        onAddBookSubmit,
        onBookEditSubmit,
        books,
    };

    return (
        <BookContext.Provider value={contextValues}>
            {children}
        </BookContext.Provider>
    )
};

export const useBookContext = () => {
    const context = useContext(BookContext);
    return context
};