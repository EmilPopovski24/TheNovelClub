import { requestFactory }  from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const create = async (bookId, commentData) => {
        const comment = await request.post(baseUrl, { bookId, commentData });
        return comment;
};
    
export const getAll = async (bookId) => {
        const query = encodeURIComponent(`bookId="${bookId}"`);
        // const author = encodeURIComponent(`author=_ownerId:users`);
        const result = await request.get(`${baseUrl}?where=${query}`);
        const comments = Object.values(result);
        return comments
};



