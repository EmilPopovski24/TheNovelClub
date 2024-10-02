import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit
}) => {
    const { values, changeHanlder, onSubmit } = useForm({
        comment:'',
    }, onCommentSubmit)

    return (
        <div className="addComment-div" >
                <form className="addComment-form" onSubmit={onSubmit} >
                    {/* <input type="text" name="username" placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} /> */}
                    <textarea name="comment" className='comment-area' id="comment-text" cols="50" rows="3" value={values.comment} onChange={changeHanlder}></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div>
    )
}