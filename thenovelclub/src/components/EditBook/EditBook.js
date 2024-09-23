import { useForm } from "../../hooks/useForm"


export const EditBook = ({
    onBookEditSubmit
}) => {

    const { values, changeHandler, onSubmit,changeValues } = useForm({
        name: '',
        author: '',
        published: '',
        genre: '',
        coverUrl:'',
        description: ''
    }, onBookEditSubmit)

    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>

        <h3>Edit the Book</h3>
        <form className="addBook-form"  method="POST">
            
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Book name..." id="name"  name="name" required/>

            <label htmlFor="author">Author</label>
            <input type="text" placeholder="Author..." id="author"  name="author" required/>

            <label htmlFor="published">Published on:</label>
            <input type="text" placeholder="Published on..." id="published"  name="published" required/>

            <label htmlFor="genre">Genre</label>
            <input type="text" placeholder="Genre..." id="genre" name="genre" required/>

            <label htmlFor="coverUrl">Cover:</label>
            <input type="text" placeholder="CoverURL..." id="coverUrl"  name="coverUrl" required/>

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="40" rows="10" required></textarea>

            <button>Edit</button>

        </form>
        </>
    )
}