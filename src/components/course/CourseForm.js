import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import css from 'react-css-modules';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import styleable from 'react-styleable';
import styles from '../App.css'; // eslint-disable-line

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <div styleName="container" className={styles.container}>
    <form>
      <h1>Manage Course</h1>

      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
        styleName="form-group" />

      <SelectInput
        name="authorId"
        label="author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}
        styleName="form-group" />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
        styleName="form-group" />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
        styleName="form-group" />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        styleName="btn btn-primary"
        onClick={onSave} />
    </form>
    </div>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default styleable(styles)(css(CourseForm, bootstrap, {allowMultiple: true}));
