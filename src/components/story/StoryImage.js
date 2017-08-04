import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import css from 'react-css-modules';
import stories from '../../styles/stories.css';

const StoryImage = ({stories}) => {
  return (
    <div>
      <p>StoryImage</p>
    </div>
  );
};

StoryImage.propTypes = {
  stories: PropTypes.object //.isRequired
};

//export default css(StoryImage, stories);
export default StoryImage;
