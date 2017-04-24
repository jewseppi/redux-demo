import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';

import configureStore from '../store/configureStore.dev';
const store = configureStore();

it.skip('renders without crashing (disabled => conflict with css modules)', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
});
