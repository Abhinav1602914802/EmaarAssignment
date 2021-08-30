import axios from 'axios';
import { BASE_URL, GET_USER } from '../../../config/server';

export function requestGetUser(page){
    return axios.request({
        method: 'get',
        url: BASE_URL+`${GET_USER}${page}&results=10`
    })
}