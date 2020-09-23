import { combineReducers } from 'redux';
import userInfo from './userInfo';
import info from './info';

const reducers = combineReducers({
  userInfo,
  info
});

export default reducers;
