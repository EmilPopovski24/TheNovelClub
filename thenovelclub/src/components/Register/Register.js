import { Link } from "react-router-dom";
import './Register.css';

export const Register = () => {
    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className="register-form">
            <h3>Register</h3>

            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id="email" />

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Username" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" id="confirm-password" />

            <button>Register</button>
            <div className="re-route">
                <p>You already have an account... please go to the <Link to="/client-login">Login page</Link></p>
            </div>
        </form>
        </>

    )
}