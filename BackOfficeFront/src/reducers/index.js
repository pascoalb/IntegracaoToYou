import { combineReducers } from 'redux';
import user from './user'

const storeApp = combineReducers({
    user
});

export default storeApp;
