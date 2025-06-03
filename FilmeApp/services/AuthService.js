import axios from 'axios';
import { BASE_URL } from '../config';

export function register(email, password, username) {
    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/auth/register`, {
            email: email, password: password, username: username
        }, {timeout: 15000})
            .then(response => {
                resolve();
            })
            .catch(error => {
                errorMessage = error.response ? error.response.data : error.message;
                reject(JSON.stringify(errorMessage));
            });
    });
}

export function login(email, password) {
    return new Promise((resolve, reject) => {
        axios.post(`${BASE_URL}/auth/login`, {email: email, password: password}, {timeout: 15000})
            .then(response => {
                resolve();
            })
            .catch(error => {
                errorMessage = error.response ? error.response.data : error.message;
                reject(JSON.stringify(errorMessage));
            });
    });
}