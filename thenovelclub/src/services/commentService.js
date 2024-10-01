import { requestFactory }  from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    const create = async (bookId, commentData) => {
        const comment = await request.post(baseUrl, bookId, commentData);
        return comment;
    }
    
    const getAll = async (bookId) => {
        const query = encodeURIComponent(`bookId="${bookId}"`);
        const author = encodeURIComponent(`author=_ownerId:users`);
        const result = await request.get(`${baseUrl}?where=${query}&load=${author}`);
        // const comments = Object.values(result);
        return result
    }

    return (
        create,
        getAll
    )
}

