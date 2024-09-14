import { useParams } from "react-router-dom";
import { useState } from "react";
import * as bookService from '../../services/bookService';
import { useEffect } from "react";
import "./BookInfo.css";

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
            <div className="book-pic">
                <img src={book.coverUrl} alt={book.name}/>    
            </div>
            
            <ul className="book-details">
            {/* <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div> */}
                <li><h3>{book.name}</h3></li>
                <li><h3>{book.author}</h3></li>
                <li><h3>{book.published}</h3></li>
                <li><h3>{book.genre}</h3></li>
                <li><h3>{book.description}</h3></li>
            </ul>
        </div>
        </>
    )
}