import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import home from './home'
import study from './study'
import course from './course'


/*
 * import reducer function
 *
 */
export default combineReducers({
  home,
  study,
  course,
  routerReducer,
  /*
   * all reducer function
   */
});