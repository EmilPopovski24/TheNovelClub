import { requestFactory }  from "./requester";

const baseUrl = 'http://localhost:3030/data/books';

export const bookServiceFactory = (token) => {

    const request = requestFactory(token)

    const getAll =async () => {
        const result = await request.get(baseUrl);
        const books = Object.values(result)
        return books;
    }
    
    const addBook = async(data) => {
        const result = await request.post(baseUrl, data);
        return result
    }
    
    const getOne = async(bookId) => {
        const result = await request.get(`${baseUrl}/${bookId}`)
        // console.log(result)
        return result
    }

    const deleteBook = (bookId) => request.delete(`${baseUrl}/${bookId}`);

    const edit = (bookId, data) => request.put(`${baseUrl}/${bookId}`, data)

    return {
        getAll,
        addBook,
        getOne,
        deleteBook,
        edit
    }
}




// export const getAll = () => {
//     fetch(baseUrl)
//         .then(response => response.json())
//         .then(result => console.log(result)
//     )
// }