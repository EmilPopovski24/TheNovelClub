

export const AddComment = ({
    onCommentSubmit
}) => {


    return (
        <div className="addComment-div">
                <form className="addComment-form" onSubmit={onCommentSubmit} >
                    {/* <input type="text" name="username" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} /> */}
                    <textarea name="comment" className='comment-area' id="comment-text" cols="50" rows="3" ></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div>
    )
}