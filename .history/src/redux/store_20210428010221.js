import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';
/* import fullScreenCircularProgress from '../state/fullScreenCircularProgress';
import snackbars from './../state/snackbars'
import drawer from './../state/drawer';
import recipes from './../state/recipes'; */
const initialState = {};
const middleware = [thunk];

//const composeEnhancers = window.___DEVTOOLS_EXPENSION_COMPOSE__ || compose
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);