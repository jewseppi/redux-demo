import React, {PropTypes} from 'react';
import StoryListImage from './StoryListImage';

const StoryList = ({stories}) => {
  return (
    <div>
      {
        stories['data'] != null ?
          stories['data'].map(story =>
            <StoryListImage key={story.id} story={story} />) : ''
      }
    </div>
  );
};

StoryList.propTypes = {
  stories: PropTypes.object.isRequired
};

export default StoryList;
