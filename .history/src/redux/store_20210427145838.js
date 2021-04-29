import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
/* import fullScreenCircularProgress from '../state/fullScreenCircularProgress';
import snackbars from './../state/snackbars'
import drawer from './../state/drawer';
import recipes from './../state/recipes'; */

const rootReducer = combineReducers({
/*   fullScreenCircularProgress,
  snackbars,
  drawer,
  recipes */
});

export default rootReducer;