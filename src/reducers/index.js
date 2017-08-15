import {combineReducers} from 'redux';
import stories from './storyReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  stories,
  ajaxCallsInProgress
});

export default rootReducer;
