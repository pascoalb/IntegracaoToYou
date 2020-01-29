import { all } from 'redux-saga/effects';
import { watchSetLogin, watchSaveUser } from './user';

export default function* rootSaga() {
    yield all([
        watchSetLogin(),
        watchSaveUser()
    ]);
}
