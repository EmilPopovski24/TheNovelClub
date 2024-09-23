import { useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useService } from "../../hooks/useService";
import { bookServiceFactory } from "../../services/bookService";
import { useEffect } from "react";


export const EditBook = ({
    onBookEditSubmit
}) => {
    //TODO with useState

    const { bookId } =useParams();
    const bookService = useService(bookServiceFactory);
    const { values, changeHandler, onSubmit,changeValues } = useForm({
        name: '',
        author: '',
        published: '',
        genre: '',
        coverUrl:'',
        description: ''
    }, onBookEditSubmit);

    useEffect(() => {
        bookService.getOne(bookId)
            .then( result => {
                changeValues(result)
            })
    })

    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div> 

        <h3>Edit the Book</h3>
        <form className="addBook-form"  method="POST" onSubmit={onSubmit}>
            
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Book name..." id="name"  name="name" value={values.name} onChange={changeHandler} required/>

            <label htmlFor="author">Author</label>
            <input type="text" placeholder="Author..." id="author"  name="author" value={values.author} onChange={changeHandler} required/>

            <label htmlFor="published">Published on:</label>
            <input type="text" placeholder="Published on..." id="published"  name="published" value={values.published} onChange={changeHandler} required/>

            <label htmlFor="genre">Genre</label>
            <input type="text" placeholder="Genre..." id="genre" name="genre" value={values.genre} onChange={changeHandler} required/>

            <label htmlFor="coverUrl">Cover:</label>
            <input type="text" placeholder="CoverURL..." id="coverUrl"  name="coverUrl" value={values.coverUrl} onChange={changeHandler} required/>

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="40" rows="10" value={values.description} onChange={changeHandler}  required></textarea>

            <button>Edit</button>

        </form>
        </>
    )
}