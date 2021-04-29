import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
/* import fullScreenCircularProgress from '../state/fullScreenCircularProgress';
import snackbars from './../state/snackbars'
import drawer from './../state/drawer';
import recipes from './../state/recipes'; */

const reducer = combineReducers({
/*   fullScreenCircularProgress,
  snackbars,
  drawer,
  recipes */
});

const composeEnhancers = window.___DEVTOOLS_EXPENSION_COMPOSE__ || compose
export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);