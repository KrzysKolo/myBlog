import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root.reducer';
/* import fullScreenCircularProgress from '../state/fullScreenCircularProgress';
import snackbars from './../state/snackbars'
import drawer from './../state/drawer';
import recipes from './../state/recipes'; */



const composeEnhancers = window.___DEVTOOLS_EXPENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);