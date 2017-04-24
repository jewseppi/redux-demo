import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import css from 'react-css-modules';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import styles from '../App.css';

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <div className="container">
    <form>
      <h1>Manage Course</h1>

      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
        className="form-group" />

      <SelectInput
        name="authorId"
        label="author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}
        className="form-group" />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
        className="form-group" />

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onChange}
        error={errors.length}
        className="form-group" />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
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

export default css(CourseForm, bootstrap, {allowMultiple: true, errorWhenNotFound: true});
//export default CourseForm;
//export const CourseFormTest = CourseForm;
