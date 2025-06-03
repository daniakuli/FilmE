import axios from 'axios';
import { BASE_URL } from '../config';

export function getUploads() {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/exploreuploads`)
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            reject(error);
        });
    });
}