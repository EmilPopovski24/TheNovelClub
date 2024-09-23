import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { Catalog } from './components/Catalog/Catalog';
import { BookInfo } from './components/BookInfo/BookInfo';
import { AddBook } from './components/AddBook.js/AddBook';
import { EditBook } from './components/EditBook/EditBook';
import { AuthProvider } from './contexts/AuthContext';
import { bookServiceFactory } from './services/bookService';
import './App.css';

function App() {

    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    const bookService = bookServiceFactory(); //auth.accessToken
    
    useEffect(()=> {
        bookService.getAll()
            .then(result => {
                setBooks(result);
            })
    },[]);

    const onAddBookSubmit = async(bookData) => {
        const newBook = await bookService.addBook(bookData);
        setBooks(state => [...state, newBook])
        navigate("/catalog")
        return newBook;
    }

    const onBookEditSubmit = async (values) => {
        const result = await bookService.edit(values._id, values);
        setBooks(state => state.map(x=> x._id === values._id ? result: x))
        navigate(`/catalog/${values._id}`)
        return result
    }

     return (
        <AuthProvider>
        <div className="App">
            <Header />
            <div className='main-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/catalog' element={<Catalog books={books}/>} />
                    <Route path='/catalog/:bookId' element={<BookInfo />} />
                    <Route path='/catalog/:bookId/edit' element={<EditBook onBookEditSubmit={onBookEditSubmit}/>} />
                    <Route path='/add-book' element={<AddBook onAddBookSubmit={onAddBookSubmit}/>} />
                </Routes>
            </div>
            < Footer />
        </div>
        </AuthProvider>
  );
}

export default App;
