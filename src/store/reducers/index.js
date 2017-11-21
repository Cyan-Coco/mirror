import {combineReducers, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {createHashHistory} from 'history';
const history = createHashHistory();
const middleware = routerMiddleware(history);

/*
 * import reducer function
 *
 */
export default combineReducers({
    routerReducer,
    /*
     * all reducer function
     */

}, applyMiddleware(middleware));