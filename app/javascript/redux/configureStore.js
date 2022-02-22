
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import messagesReducer from './messages/messages';

const reducers = combineReducers({ messagesReducer });
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;