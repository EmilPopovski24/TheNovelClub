import './BookItem.css';

export const BookItem = ({
    Name,
    Author,
    Published,
    Genre,
    coverUrl,
    description
}) => {
    return (
        <>
        <div className="book-item">
            {Name}
            <p>Author: </p>{Author}
            <img src={coverUrl} alt={Name} className="book-pic" />
            <p>Published: </p> {Published}
            <p>Genre: </p> {Genre}
            <p>Description: </p> {description} 
       </div>
        </>
    )
}