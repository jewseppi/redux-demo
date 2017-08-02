import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import css from 'react-css-modules';
import stories from '../../styles/stories.css';

const StoryListRow = ({story}) => {
  return (
    <div>
      <a href="" id={story.id} styleName="story-wrap">
        <div styleName="title-wrap">
          <div styleName="title">{story['attributes'].title}</div>
        </div>
        <img src={story['attributes']['image-url']} styleName="story" />
      </a>
    </div>
  );
};

StoryListRow.propTypes = {
  story: PropTypes.object.isRequired
};

export default css(StoryListRow, stories);
