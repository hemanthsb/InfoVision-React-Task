import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Imagepage from '../pages/imagepage';
import Home from '../Home';
import PageNotFound from '../PageNotFound';
import imageDetails from '../pages/imageDetails';

export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/imagePage" component={Imagepage} exact />
          <Route path="/imageDetails" component={imageDetails} exact />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}