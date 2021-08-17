import axios from 'axios';
import { BASE_URL } from '../config/server';

// function for get request
export const get_req = (path) => {
    const url = BASE_URL + path;
    const header = {
        "Access-Control-Allow-Origin": "*",
    };

    return axios({
        method: 'get',
        url: url,
        headers: header
    });
}

export const registrationDateFormate = (data) => {
    let date = new Date(data.date)
    console.log(date.getHours())
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let month = date.toLocaleString('default', { month: 'long' })
    let dateNo = date.getDate() < 9 ? '0' + date.getDate() : date.getDate()
    if (data.age === 0) {
        return 'Today'
    }
    else if (data.age === 1) {
        return `Yesterday, ${hours}:${minutes}`
    }
    else if (data.age === 2) {
        return '2 days ago'
    }
    else {
        return `${month} ${dateNo}, ${date.getFullYear()}`
    }
}

export const dobFormate = (data) => {
    let date = new Date(data);
    let month = date.toLocaleString('default', { month: 'short' })
    let dateNo = date.getDate() < 9 ? '0' + date.getDate() : date.getDate()
    return `${dateNo} ${month} ${date.getFullYear()}`
}


