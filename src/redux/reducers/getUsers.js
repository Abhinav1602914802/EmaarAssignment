import { GET_USERS, SET_USERS } from "../type";

export const getUser = (page) => ({
    type: GET_USERS,
    page
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

const initialState = {
    users: null
}

const getUsers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            const {users} = action;
            return {
                ...state,
                users
            };
        default: 
            return state;
    }
}

export default getUsers;