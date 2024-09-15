import * as request from './requester';

const baseUrl = "http://localhost:3030/users"

export const login = (loginData) => {
    const result = request.post(`${baseUrl}/login`, loginData)
    return result
}

export const register = (registerData) => {
    const result = request.post(`${baseUrl}/register`, registerData);
    return result
}