import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import './Login.css';

// const LoginFormKeys = {
//     Email: 'email',
//     Password: 'password'
// }

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        // [LoginFormKeys.Email]: '',
        // [LoginFormKeys.Password]:'',
        email: '',
        password: '',
    }, onLoginSubmit)

    return (
        <>
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
        <form className="login-form" onSubmit={onSubmit}>
            <h3>Login</h3>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={values.email} onChange={changeHandler} placeholder="Email..." id="email"  required/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={values.password} onChange={changeHandler} placeholder="Password" id="password" required/>

            {/* <input type="submit" value="Login" /> */}
            <button>Login</button>
            <div className="re-route">
                <p>You don't have an account... please go to the <Link to="/register">Register page</Link></p>
            </div>
        </form>
        </>
    )
}