import { requestFactory }  from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {

    const request = requestFactory(token);

    const create = async (commentData) => {
        const comment = await request.post(baseUrl, commentData);
        return comment;
    }
    
    const getAll = async (bookId) => {
        const query = encodeURIComponent(`bookId="${bookId}"`);
        const result = await request.get(`${baseUrl}?where=${query}`);
        const comments = Object.values(result);
        return comments
    }

    return (
        create,
        getAll
    )
}

