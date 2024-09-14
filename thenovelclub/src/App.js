import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import * as bookService from './services/bookService';
import './App.css';
import { Catalog } from './components/Catalog/Catalog';
import { BookInfo } from './components/BookInfo/BookInfo';

function App() {

    const [books, setBooks] = useState([]);

    useEffect(()=> {
        bookService.getAll()
            .then(result => {
                setBooks(result);
            })
    },[])

     return (
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
                </Routes>
            </div>
      < Footer />
    </div>
  );
}

export default App;
