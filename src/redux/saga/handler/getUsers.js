import { call, put } from 'redux-saga/effects';
import { setUsers } from '../../reducers/getUsers';
import { requestGetUser } from '../request/getUsers';

export function* handleGetUser(action) {
    try {
        const response = yield call(requestGetUser, action.page);
        yield put(setUsers(response))
    }
    catch (err) {
        console.log(err);
    }
}