import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const StoryListRow = ({story}) => {
  return (
    <tr>
      <td><a href={story.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/story/' + story.id}>{story.title}</Link></td>
      <td>{story.authorId}</td>
      <td>{story.category}</td>
      <td>{story.length}</td>
    </tr>
  );
};

StoryListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default StoryListRow;
