import React from 'react';
import { render } from 'react-dom';
import App from './App';
import tdata from './tdata';

const localStorage = require('mobx-localstorage');

render(
  <App data={localStorage.getItem('lsSet') || []} />,
  document.getElementById('App')
);
