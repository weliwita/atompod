"use strict";

var React = require('react');

var Router = require('react-router').Router
var Route = require('react-router').Route


var App = require('./components/app');


var routes = (
 <Router>
    <Route path="/" component={App}>
      
    </Route>
  </Router>
);

module.exports = routes;