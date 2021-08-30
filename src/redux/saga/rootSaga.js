import { takeLatest } from 'redux-saga/effects';
import { GET_USERS  } from '../type';
import { handleGetUser } from './handler/getUsers';


export function* watcherSaga() {
    yield takeLatest(GET_USERS, handleGetUser)
}