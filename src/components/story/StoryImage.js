import React, {PropTypes} from 'react';
import {Link} from 'react-router';
//import css from 'react-css-modules';
//import stories from '../../styles/stories.css';

const StoryImage = ({story}) => {
  return (
    <div>
      <p>StoryImage</p>
      { story }
    </div>
  );
};

StoryImage.propTypes = {
  story: PropTypes.object.isRequired
};

//export default css(StoryImage, stories);
export default StoryImage;
