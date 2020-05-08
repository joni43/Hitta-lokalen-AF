import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import {
  FetchOfficesReducer,
  fetchUserOfficeReducer,
  FetchUserReducer,
  SelectionReducer
} from './reducers/index';

const rootReducer = combineReducers({
  fetchOffices: FetchOfficesReducer,
  fetchUserOffice: fetchUserOfficeReducer,
  fetchUser: FetchUserReducer,
  selection: SelectionReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default configureStore;
