var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');
var Parse = require('parse');

var HomePageComponent = React.createClass({
	render: function() {
		return (
			<div className="home-page-container">
				<div className="jumbotron">
 					 <h1>Hello, welcome to Recipe Builder!</h1>
  					<p>View Your Recipes or Create a new Recipe</p>
					</div>
			</div>
		);
	}

});

module.exports = {
	"HomePageComponent": HomePageComponent
};
