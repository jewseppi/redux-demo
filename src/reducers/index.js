import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import stories from './storyReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  stories,
  ajaxCallsInProgress
});

export default rootReducer;
