import { all } from 'redux-saga/effects';
import { watchSetLogin, watchSaveUser, watchGetUserValid } from './user';

export default function* rootSaga() {
    yield all([
        watchSetLogin(),
        watchSaveUser(),
        watchGetUserValid()
    ]);
}
