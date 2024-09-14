import { useState } from 'react';
import './AddBook.css';

export const AddBook = ({
    onAddBookSubmit
}) => {

    const [values, setValues] = useState({
        name: '',
        author: '',
        published: '',
        genre: '',
        coverUrl: '',
        description: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAddBookSubmit(values);
    }

    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <h3>Add a Book</h3>
        <form className="addBook-form" onSubmit={onSubmit}>
            
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Book name..." id="name" value={values.name} onChange={onChangeHandler} name="name" required/>

            <label htmlFor="author">Author</label>
            <input type="text" placeholder="Author..." id="author" value={values.author} onChange={onChangeHandler} name="author" required/>

            <label htmlFor="published">Published on:</label>
            <input type="text" placeholder="Published on..." id="published" value={values.published} onChange={onChangeHandler} name="published" required/>

            <label htmlFor="genre">Genre</label>
            <input type="text" placeholder="Genre..." id="genre" value={values.genre} onChange={onChangeHandler} name="genre" required/>

            <label htmlFor="coverUrl">Cover:</label>
            <input type="text" placeholder="CoverURL..." id="coverUrl" value={values.coverUrl} onChange={onChangeHandler} name="coverUrl" required/>

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="40" rows="10" value={values.description} onChange={onChangeHandler} required></textarea>

            <button>Add</button>

        </form>
        </>
        
    )
}