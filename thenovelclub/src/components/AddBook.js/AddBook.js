

export const AddBook = () => {
    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className="addBook-form">
            <h3>Add a Book</h3>

            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Book name..." id="name" />

            <label htmlFor="author">Author</label>
            <input type="author" placeholder="Author..." id="author" />

            <label htmlFor="published">Published</label>
            <input type="published" placeholder="Published on..." id="published" />

            <label htmlFor="year">Year</label>
            <input type="year" placeholder="Year..." id="year" />

            <label htmlFor="genre">Genre</label>
            <input type="genre" placeholder="Genre..." id="genre" />

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" ></textarea>


            <button>Add</button>

        </form>
        </>
        
    )
}