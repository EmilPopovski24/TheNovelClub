import { useParams } from "react-router-dom";
import { useState } from "react";
import * as bookService from '../../services/bookService';
import { useEffect } from "react";

export const BookInfo = () => {

    const { bookId } = useParams(); // get from app router bookId
    const [book, setBook] = useState({});

    useEffect(()=> {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result)
            })
    },[bookId])

    return (
        <>
        <div className="bookInfo-page">
            <img src={book.coverUrl} alt={book.name}/>            

        </div>
        </>
    )
}