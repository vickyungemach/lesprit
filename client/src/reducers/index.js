import { combineReducers } from 'redux';
import auth from './auth';
import words from './words';
import alerts from './alerts';
import lists from './lists';

export default combineReducers({
    auth,
    words,
    alerts,
    lists
});