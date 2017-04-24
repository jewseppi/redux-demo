import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';
import hook from 'css-modules-require-hook';

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});

function setup(saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm via Enzyme (disabled => conflict with css modules)', () => {
  it('should return a className prop as class value', () => {
    const wrapper = shallow(<div className="bar" />);
    //console.log('DEBUG----->', wrapper.html()); // eslint-disable-line
  });

  it.skip('renders form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1'.split(' ').join('.')).text()).toEqual('Manage Course');
  });

  it.skip('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it.skip('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
