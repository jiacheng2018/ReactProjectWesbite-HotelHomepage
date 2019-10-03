//This file is the API of reducer
import authReducer from './authReducer';
import {combineReducers} from 'redux';
export default combineReducers({
    auth:authReducer
})