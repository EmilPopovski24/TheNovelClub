import { Link } from "react-router-dom";
import './Register.css';
import { useContext } from "react";
import { AuthContext} from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        username:'',
        password:'',
        confirmPassword:'',
    }, onRegisterSubmit)

    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className="register-form" onSubmit={onSubmit} method="POST">
            <h3>Register</h3>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={values.email} onChange={changeHandler} placeholder="Email" id="email" />

            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={values.username} onChange={changeHandler} placeholder="Username" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password" id="password" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={changeHandler} placeholder="Confirm Password" id="confirmPassword" />

            <button>Register</button>
            <div className="re-route">
                <p>You already have an account... please go to the <Link to="/login">Login page</Link></p>
            </div>
        </form>
        </>

    )
}