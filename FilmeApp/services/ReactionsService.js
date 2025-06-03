import axios from 'axios';
import { BASE_URL } from '../config';

export function sendReactions(uri, time, mediaId) {
    let formData = new FormData();
    let type = `image/jpeg`;

    formData.append('photo', { uri: uri, name: 'filename', type});

    let seconds = time;
    let minutes = 0;

    if(seconds >= 60) {
        minutes = Math.floor(time/60);
        seconds = seconds - (60 * minutes);
    }
    
    seconds =  seconds < 10 ? "0" + seconds : seconds;

    formData.append('timestamp', "0" + minutes + ":" + seconds);
    formData.append('reactionTo', mediaId);

    axios.get(`${BASE_URL}/profileuser`)
    .then(response => {
        formData.append('userReacting', response.data._id);
        
        axios.post(`${BASE_URL}/react`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(JSON.stringify(err.response.data));
        });
    })
    .catch(error => {
        console.log(error);
    })
}