import { request } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/books';

export const getAll =async () => {
    const result = await request('GET', baseUrl);
    const books = Object.values(result)
    return books;
}


// export const getAll = () => {
//     fetch(baseUrl)
//         .then(response => response.json())
//         .then(result => console.log(result)
//     )
// }