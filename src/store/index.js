/*
 * 该文件请勿动
 */
import {createStore,applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux'
import {createHashHistory} from 'history';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise'
const history = createHashHistory();
const middleware = routerMiddleware(history);
import Reducers from './reducers/index';

let store = createStore(Reducers,applyMiddleware(thunk,promise,logger,middleware));
export default store
