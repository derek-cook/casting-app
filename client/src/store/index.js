import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from '../reducers';

let store = null;

export default {
    createStore: () => {

        const reducers = combineReducers({
            user: userReducer,
        });

        store = createStore(
            allReducers,
            applyMiddleware(thunk, logger)
        );
        return store;
    },

    currentStore: () => { return store }

}