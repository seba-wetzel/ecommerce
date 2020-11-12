import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { reducer as products } from './reducers/Products-reducer'
import { reducer as cart } from './reducers/cart'
import { reducer as user } from './reducers/user'

import { loadState, saveState } from './localStorage'
const persistedState = loadState();

const reducers = combineReducers({
    products,
    cart,
    user
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));

store.subscribe(() => {
    saveState({
        ...store.getState()
    });
});


export default store