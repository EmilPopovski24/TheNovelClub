import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { bookServiceFactory } from '../../services/bookService';
// import { commentServiceFactory } from '../../services/commentService';
import { useEffect } from "react";
import "./BookInfo.css";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";


export const BookInfo = () => {

    const { userId } = useContext(AuthContext);
    console.log(userId)
    const { bookId } = useParams(); 
    const [book, setBook] = useState({});
    const [username, setUsername] = useState('');
    // const [comment, setComment] = useState('');
    // const [comments, setComments] = useState([]);
    // const commentService = commentServiceFactory();
    const bookService = useService(bookServiceFactory);
    const navigate = useNavigate();

    useEffect(()=> {
        bookService.getOne(bookId)
            .then(result => {
                setBook(result)
                // return commentService.getAll(bookId)
            });
    },[bookId])

    // const onCommentSubmit = async(e) => {
    //     e.preventDefault();
    //     await commentService.create({
    //         bookId,
    //         username,
    //         comment,
    //     })
    //     setUsername('');
    //     setComment('');
    // };

    // console.log(comments) 

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
            {/* <div className="addComment-div">
                <form className="addComment-form" 
                onSubmit={onCommentSubmit} 
                >
                    <input type="text" name="username" placeholder="Emo..." value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea name="comment" className='comment-area' id="comment-text" cols="50" rows="3" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div> */}
            {/* <div className="bookComments-div">
                <ul className='bookComments-ul'>  
                    {comments.map(x => (
                        <li className="comment">
                            <p>{x.username}: {x.comment}</p>
                        </li>
                    ))}
                </ul>
                {comments.length === 0 && (
                    <p className="no-comment">No Comments</p>
                )}
            </div> */}
        </div>


        </>
    )
}