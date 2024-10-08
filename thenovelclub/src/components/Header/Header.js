import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

export const Header = () => {

    const { isAuthenticated } = useContext(AuthContext)

    return(
        <>
            <ul className='header-ul'>
                <li className="header-parameter"><Link to='/'>Home</Link></li>
                {!isAuthenticated && (
                    <>
                        <li className="header-parameter"><Link to='/login'>Login</Link></li>
                        <li className="header-parameter"><Link to='/register'>Register</Link></li>
                    </>
                )}           
                {isAuthenticated && (
                    <>
                        <li className="header-parameter"><Link to='/catalog'>Catalog</Link></li>
                        <li className="header-parameter"><Link to='/add-book'>Add a Book</Link></li>
                        <li className="header-parameter"><Link to='/profile'>My Profile</Link></li>
                        <li className="header-parameter"><Link to='/logout'>Logout</Link></li>
                    </>
                )}
                <li className="header-parameter"><Link to='/about'>About</Link></li>
            </ul>
        </>
    )
}