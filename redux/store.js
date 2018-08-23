import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// reducers
import userReducer from './users/userReducer';
import postReducer from './posts/postReducer';
import commentReducer from './comments/commentReducer';
const store = createStore(
	combineReducers({ users: userReducer, posts: postReducer, comments: commentReducer }),
	applyMiddleware(thunk, createLogger())
);

export default store;
