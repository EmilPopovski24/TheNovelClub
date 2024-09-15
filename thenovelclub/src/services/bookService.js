import *  as request from "./requester";

const baseUrl = 'http://localhost:3030/data/books';

export const getAll =async () => {
    const result = await request.get(baseUrl);
    const books = Object.values(result)
    return books;
}

export const addBook = async(data) => {
    const result = await request.post(baseUrl, data);
    return result
}

export const getOne = async(bookId) => {
    const result = await request.get(`${baseUrl}/${bookId}`)
    console.log(result)
    return result
}


// export const getAll = () => {
//     fetch(baseUrl)
//         .then(response => response.json())
//         .then(result => console.log(result)
//     )
// }