import { Link } from "react-router-dom";
import './Login.css';

export const Login = () => {
    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className="login-form">
            <h3>Login</h3>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <button>Log In</button>
            <div className="re-route">
                <p>You don't have an account... please go to the <Link to="/register">Register page</Link></p>
            </div>
        </form>
        </>
    )
}