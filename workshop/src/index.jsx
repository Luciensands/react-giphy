import '../assets/stylesheets/application.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />,
    root
  );
}
