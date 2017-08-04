import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import StoriesPage from './components/story/StoriesPage';
import StoryPage from './components/story/StoryPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StoriesPage} />
{/*    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />*/}
    <Route path="stories" component={StoriesPage} />
    {/*<Route path="stories/:id" component={StoryPage} />*/}
  </Route>
);
