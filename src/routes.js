import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import StoriesPage from './components/story/StoriesPage';
import StoryPage from './components/story/StoryPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StoriesPage} />
    <Route path="stories" component={StoriesPage} />
    <Route path="stories/:id" component={StoryPage} />
  </Route>
);
