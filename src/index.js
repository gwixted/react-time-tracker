import React from 'react';
import { render } from 'react-dom';
import App from './App';
import tdata from './tdata';

const localStorage = require('mobx-localstorage');

if ( !localStorage.getItem('taskData') ) {
  localStorage.setItem('taskData',[]);
}

render(
  <App data={localStorage.getItem('taskData')} />,
  document.getElementById('App')
);
