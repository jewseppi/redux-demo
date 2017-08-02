import React, {PropTypes} from 'react';
import StoryListRow from './StoryListRow';

const StoryList = ({stories}) => {
  return (
    <div>
      {
        stories['data'] != null ?
          stories['data'].map(story =>
            <StoryListRow key={story.id} story={story} />) : ''
      }
    </div>
  );
};

StoryList.propTypes = {
  stories: PropTypes.object.isRequired
};

export default StoryList;
