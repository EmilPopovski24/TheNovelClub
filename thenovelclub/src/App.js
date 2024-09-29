import { Route, Routes } from 'react-router-dom';
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
import { BookProvider } from './contexts/BookContext';
import { withAuth } from './hoc/withAuth';
import './App.css';

function App() {

    // const EnhancedLogin = withAuth(Login)

     return (
        <AuthProvider>
        <BookProvider>
        <div className="App">
            <Header />
            <div className='main-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/catalog/:bookId' element={<BookInfo />} />
                    <Route path='/catalog/:bookId/edit' element={<EditBook />} />
                    <Route path='/add-book' element={<AddBook auth={withAuth}/>} />
                </Routes>
            </div>
            < Footer />
        </div>
        </BookProvider>
        </AuthProvider>
  );
}

export default App;
