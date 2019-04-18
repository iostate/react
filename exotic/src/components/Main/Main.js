import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/" component={Home} /> */}
    </Switch>
  </main>;
};
