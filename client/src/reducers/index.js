import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage/session';

import userReducer from './userReducer';
import groupReducer from './groupReducer';

const rootReducer = combineReducers({
    user: userReducer,
    groups: groupReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['groups']
};

export default persistReducer ( persistConfig, rootReducer );