import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

ReactDOM.render(
  <div>
    <Navigation />
    <Home />
  </div>,
  document.getElementById('root')
);
