import { GET_USER_RESPONSE } from "../type";

const initialState = {
    state: null
}

const getUsers = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_RESPONSE:
            return {
                ...state,
                state: action.payload
            };
        default: 
            return state;
    }
}

export default getUsers;