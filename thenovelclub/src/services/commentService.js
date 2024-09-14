import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const create = async (commentData) => {
    const result = await request.post(baseUrl, commentData);
    const comment = Object.values(result)
    return comment;
}

export const getAll = async (bookId) => {
    const query = encodeURIComponent(`bookId="${bookId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);
    return result
}