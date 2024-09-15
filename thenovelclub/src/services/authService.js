import { requestFactory } from './requester';

const baseUrl = "http://localhost:3030/users";

export const authServiceFactory = (token) => {

    const request = requestFactory(token);

    const login = (loginData) => {
        const result = request.post(`${baseUrl}/login`, loginData)
        return result
    }
    
     const register = (registerData) => {
        const result = request.post(`${baseUrl}/register`, registerData);
        return result
    }
    
    const logout = () => {
        const result = request.get(`${baseUrl}/logout`);
        return result;
    }

    return {
        login,
        register,
        logout
    }
}