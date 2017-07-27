import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function storyReducer(state = initialState.stories, action) {
  switch(action.type) {
    case types.LOAD_STORIES_SUCCESS:
      return action.stories;

    case types.CREATE_STORY_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.story)
      ];

    case types.UPDATE_STORY_SUCCESS:
      return [
        ...state.filter(story => story.id != action.story.id),
        Object.assign({}, action.story)
      ];

    default:
      return state;
  }
}
