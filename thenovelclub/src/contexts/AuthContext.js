import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async(data) => {
        try {
            const result = await authService.login(data)
            setAuth(result);
            navigate("/catalog")
        } catch(error) {
            alert("Invalid login details")
        }
    }

    const onRegisterSubmit = async(data) => {
        const {confirmPassword, ...registerData} = data;
        if (confirmPassword !== registerData.password) {
            alert("Passwords do not match!"); 
            return;
        }

        try {
            const result = await authService.register(registerData)
            setAuth(result);
            navigate("/catalog")
        } catch(error) {
            alert("Registration is not completed!")
        }
    }

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
    }

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    ) 
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}