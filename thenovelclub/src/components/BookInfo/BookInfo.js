import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { bookServiceFactory } from '../../services/bookService';
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
// import { commentServiceFactory } from "../../services/commentService";
import { AddComment } from "./AddComment/AddComment";
import * as commentService from "../../services/commentService";

import "./BookInfo.css";


export const BookInfo = () => {

    const { userId, isAuthenticated } = useAuthContext();
    const { bookId } = useParams(); 
    const [book, setBook] = useState({});
    // const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    // const commentService = useService(commentServiceFactory);
    const bookService = useService(bookServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            bookService.getOne(bookId),
            commentService.getAll(bookId)
        ]).then(([bookData,comments]) => {
            setBook({
                ...bookData,
                comments,
            })
            console.log(comments)
        })
    },[bookId])

    // useEffect(()=> {
    //     bookService.getOne(bookId)
    //         .then(result => {
    //             setBook(result)   
    //             return commentService.getAll(bookId)
    //         })
    //         .then(result => {
    //             setComments(result)
    //         })
    // },[bookId])

    const onCommentSubmit = async (values) => {
       
       const response = await commentService.create(bookId, values.comment)
       console.log(response)


        // setComment(state => ({
        //     ...state,
        //     comments:[...comments, response]
        // }));

        // // setUsername('');
        // setComment('');
    };

    const isOwner = book._ownerId === userId;

    const onDelete = async() => {
        // confirm("Are you sure you want to delete the book?")
        await bookService.deleteBook(book._id)
        navigate("/catalog")
    }

    return (
        <>
        <div className="bookInfo-page">
            <div className="book-pic">
                <img src={book.coverUrl} alt={book.name} id="book-pic"/>    
            </div>
            <div className="book-details"></div>
            <ul className="book-details-ul">
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
            {isOwner && (
                <>
                    <button className="action-btns"><Link to={`/catalog/${book._id}/edit`}>Edit</Link></button>
                    <button className="action-btns" onClick={onDelete}>Delete</button>
                </>
            )}

            <button className="action-btns">Mark as Read</button>
        </div>
        <div className="post-comment">
            { isAuthenticated && ( <AddComment onCommentSubmit={onCommentSubmit}/>)}
            <div className="bookComments-div">
                <ul className='bookComments-ul'>  
                    {book.comments && book.comments.map(x => (
                        <li key={x._id} className="comments-li">
                            <p>{x.author.username}: {x.commentData}</p>
                        </li>
                    ))}
                </ul>
                {/* {book.comments.length === 0 && (
                    <p className="no-comment">No Comments</p>
                )} */}
            </div>
        </div>
        </>
    )
}