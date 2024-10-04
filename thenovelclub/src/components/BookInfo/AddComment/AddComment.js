import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment:'',
    }, onCommentSubmit)

    return (
        <div className="addComment-div" >
                <form className="addComment-form" onSubmit={onSubmit} >
                    <textarea name="comment" type="text" className='comment-area' id="comment-text" cols="50" rows="3" value={values.comment} onChange={changeHandler}></textarea>
                    <button className='post-btn' type="submit">Add comment</button>
                </form>
            </div>
    )
}