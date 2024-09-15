import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import * as bookService from './services/bookService';
import { Catalog } from './components/Catalog/Catalog';
import { BookInfo } from './components/BookInfo/BookInfo';
import { AddBook } from './components/AddBook.js/AddBook';
import { AuthContext } from './contexts/AuthContext';
import './App.css';

function App() {

    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [auth, setAuth] = useState({});
    
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

    const onLoginSubmit = async(data) => {
        console.log(data)
        navigate("/catalog")
    }

     return (
        <AuthContext.Provider value={{onLoginSubmit}}>
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
                    <Route path='/add-book' element={<AddBook onAddBookSubmit={onAddBookSubmit}/>} />
                </Routes>
            </div>
            < Footer />
        </div>
        </AuthContext.Provider>
  );
}

export default App;
