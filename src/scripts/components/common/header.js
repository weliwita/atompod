"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <img src="../images/pluralsight-logo.png" />
              </Link>
              <ul className="nav navbar-nav">
                <li><Link to="/"><i className="fa fa-home"></i>Home</Link></li>
                <li><Link to="about">About</Link></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;
