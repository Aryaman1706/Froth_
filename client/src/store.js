import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import {  composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

const result = {
    store: store,
    persistor: persistor
};

export default result ;