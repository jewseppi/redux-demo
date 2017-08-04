import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const options = {headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Token token=8c883c6e45024cf7b100ad216f9b06e8'
},
  method: 'get'
};

export function loadStoriesSuccess(stories) {
  return {type: types.LOAD_STORIES_SUCCESS, stories};
}

export function loadStorySuccess(stories) {
  console.log('LOAD_STORY_SUCCESS');
}

export function createStorySuccess(story) {
  return {type: types.CREATE_STORY_SUCCESS, story};
}

export function updateStorySuccess(course) {
  return {type: types.UPDATE_STORY_SUCCESS, course};
}

export function loadStories(id) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    fetch(`${types.API_URL}/members/${id}/stories`, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((stories) => dispatch(loadStoriesSuccess(stories)))
      .catch((error) => { throw(error); });
  };
}

export function loadStory(id) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    fetch(`${types.API_URL}/stories/${id}`, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((stories) => dispatch(loadStorySuccess(stories)))
      .catch((error) => { throw(error); });
  };
}

/*export function saveStory(story) {
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
}*/
