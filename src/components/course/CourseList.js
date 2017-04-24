import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';
import css from 'react-css-modules';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CourseList = ({courses}) => {
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
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default css(CourseList, bootstrap, {allowMultiple: true});
