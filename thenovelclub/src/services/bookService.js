import { request } from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/books';


// export const getAll = () => {
//     fetch(baseUrl)
//         .then(response => response.json())
//         .then(result => console.log(result)
//     )
// }

export const getAll =async () => {
    const books = await request('GET', baseUrl);

    return books;
}