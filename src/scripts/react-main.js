$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');


var Router = require('react-router').Router
var Route = require('react-router').Route
var hashHistory = require('react-router').hashHistory
var IndexRoute = require('react-router').IndexRoute

var App = require('./components/app')
var Home = require('./components/homePage')
var About = require('./components/about/aboutPage');


ReactDOM.render((

<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
    </Route>
</Router>

), document.getElementById('app'));