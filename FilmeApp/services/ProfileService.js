import axios from 'axios';
import { BASE_URL } from '../config';

export function getCurrentUser(){
    return new Promise((resolve, reject) =>{
        axios.get(`${BASE_URL}/profileuser`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });    
}

export function getUsersUploads(){
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/uploads`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
