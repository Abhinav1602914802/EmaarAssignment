import * as helper from '../../utility/helper';
import { GET_USER } from '../../config/server';
import { GET_USER_RESPONSE } from '../type';

export const getUser = (pageNo) => {
    return dispatch => {
        helper.get_req(`${GET_USER}${pageNo}&results=10`)
    
        .then((res)=>{
            dispatch({
                type: GET_USER_RESPONSE,
                payload: res
            })
        })
        .catch((err)=>{
            dispatch({
                type: GET_USER_RESPONSE,
                payload: err.response
            })
        })
    }
}
