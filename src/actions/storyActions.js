import * as types from './actionTypes';
import storyApi from '../api/storyApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadStoriesSuccess(stories) {
  return {type: types.LOAD_STORIES_SUCCESS, stories};
}

export function createStorySuccess(story) {
  return {type: types.CREATE_STORY_SUCCESS, story};
}

export function updateStorySuccess(course) {
  return {type: types.UPDATE_STORY_SUCCESS, course};
}

export function loadStories() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return storyApi.getAllStories().then(stories => {
      dispatch(loadStoriesSuccess(stories));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveStory(story) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return storyApi.saveCourse(story).then(savedStory => {
      story.id ? dispatch(updateStorySuccess(savedStory)) :
        dispatch(createStorySuccess(savedStory));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
