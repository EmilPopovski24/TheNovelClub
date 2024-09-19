import './BookItem.css';
import { Link } from 'react-router-dom';

export const BookItem = ({
    name,
    author,
    published,
    coverUrl,
    _id
}) => {
    return (
        <>
        <div className="book-item-card">  
            <div className="book-item">
                <div className='book-cover'>
                    <img src={coverUrl} alt={name} />
                </div> 
                <div className='book-info'>
                    <h3 id='book-name'>{name}</h3>
                    <h3>Author: {author}</h3>
                    <h3>Published: {published}</h3> 
                </div>
            </div>
            <div className='more-info'>
                <button id="info-button"><Link to={`/catalog/${_id}`}> More Info</Link></button>
            </div>
       </div>
        </>
    )
}