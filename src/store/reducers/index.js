import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import home from './home'
import study from './study'

/*
 * import reducer function
 *
 */
export default combineReducers({
  home,
  study,
  routerReducer,
  /*
   * all reducer function
   */
});