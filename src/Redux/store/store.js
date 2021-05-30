import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//REDUCERS
import cart from '../reducers/CartReducer';
import product from '../reducers/ProductReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    cart,
    product
})

export default createStore( reducers, composeEnhancers(applyMiddleware(thunk)))