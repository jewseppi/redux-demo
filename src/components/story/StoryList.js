import React, {PropTypes} from 'react';
import StoryListRow from './StoryListRow';
import css from 'react-css-modules';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const StoryList = ({stories}) => {
  return (
    <table styleName="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {stories.map(story =>
        <StoryListRow key={story.id} story={story} />
      )}
      </tbody>
    </table>
  );
};

StoryList.propTypes = {
  stories: PropTypes.array.isRequired
};

export default css(StoryList, bootstrap, {allowMultiple: true});
