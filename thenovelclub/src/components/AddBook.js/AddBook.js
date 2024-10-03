import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import './AddBook.css';
import { BookContext } from '../../contexts/BookContext';
import { AuthContext } from '../../contexts/AuthContext';

export const AddBook = () => {

    const user = useContext(AuthContext);
    const { onAddBookSubmit } = useContext(BookContext);
    const {values, changeHandler, onSubmit } = useForm({
        name: '',
        author: '',
        published: '',
        genre: '',
        coverUrl: '',
        description: '',
        username: user.username
    }, onAddBookSubmit);

    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>

        <h3>Add a Book</h3>
        <form className="addBook-form" onSubmit={onSubmit}>
            
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Book name..." id="name" value={values.name} onChange={changeHandler} name="name" required/>

            <label htmlFor="author">Author</label>
            <input type="text" placeholder="Author..." id="author" value={values.author} onChange={changeHandler} name="author" required/>

            <label htmlFor="published">Published on:</label>
            <input type="text" placeholder="Published on..." id="published" value={values.published} onChange={changeHandler} name="published" required/>

            <label htmlFor="genre">Genre</label>
            <input type="text" placeholder="Genre..." id="genre" value={values.genre} onChange={changeHandler} name="genre" required/>

            <label htmlFor="coverUrl">Cover:</label>
            <input type="text" placeholder="CoverURL..." id="coverUrl" value={values.coverUrl} onChange={changeHandler} name="coverUrl" required/>

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="40" rows="10" value={values.description} onChange={changeHandler} required></textarea>

            <button>Add</button>

        </form>
        </>
    )
}