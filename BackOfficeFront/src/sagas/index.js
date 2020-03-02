import { all } from 'redux-saga/effects';
import { watchSetLogin, watchSaveUser, watchGetUserValid } from './user';
import { watchGetPlans, watchGetUserPlan } from './plans';

export default function* rootSaga() {
    yield all([
        watchSetLogin(),
        watchSaveUser(),
        watchGetUserValid(),
        watchGetPlans(),
        watchGetUserPlan()
    ]);
}
