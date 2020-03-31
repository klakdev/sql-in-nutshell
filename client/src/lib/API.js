import axios from 'axios';

export function getTweetsList(){
    return axios.get(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`)
}
