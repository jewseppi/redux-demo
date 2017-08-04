/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadStories} from './actions/storyActions';
import {loadStory} from './actions/storyActions';
import './styles/syles.css';
import '../node_modules/toastr/build/toastr.min.css';

const MEM_ID = '5f87df38-0a65-4999-ba9e-23e3e288659c';
const STR_ID = 'e585829f-8a2f-4a30-a6ea-e6f033af0e7f';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadStories(MEM_ID));

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
