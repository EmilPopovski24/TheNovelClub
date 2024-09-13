import './Header.css';


export const Header = () => {
    return(
        <>
            <ul className='header-ul'>
                <li className="header-parameter">Home</li>
                <li className="header-parameter">Login</li>
                <li className="header-parameter">Register</li>
                <li className="header-parameter">Logout</li>
                <li className="header-parameter">Catalog</li>
                <li className="header-parameter">My Profile</li>
                <li className="header-parameter">About</li>
            </ul>
        </>
    )
}