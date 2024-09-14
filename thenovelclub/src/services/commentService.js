import * as request from "./requester";

const baseUrl = 'http://localhist:3030/jsonstore/commments'

export const create = async (commentData) => {
    const result = await request.post(baseUrl, commentData);
    console.log(result);
    return result;
}