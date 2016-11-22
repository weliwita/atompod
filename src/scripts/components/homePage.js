"use strict";

var React = require('react');
var Button = require('react-desktop/windows').Button;
var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Hi Administration</h1>
				<p>this is cool and nice, React Router, and Flux for ultra-responsive web apps.</p>
				 <Button push color='#cc7f29' onClick={() => console.log('Clicked!')}>
					Press me!
				</Button>
			</div>
		);
	}
});

module.exports = Home;