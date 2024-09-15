import { Link } from "react-router-dom";
import { useContext } from "react";
import './Login.css';
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext)

    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className="login-form" onSubmit={onLoginSubmit}>
            <h3>Login</h3>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="Email..." id="email" required/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" id="password" required/>

            <button>Login</button>
            <div className="re-route">
                <p>You don't have an account... please go to the <Link to="/register">Register page</Link></p>
            </div>
        </form>
        </>
    )
}