import { combineReducers } from 'redux';
import user from './user'
import plans from './plans'

const storeApp = combineReducers({
    user,
    plans
});

export default storeApp;
