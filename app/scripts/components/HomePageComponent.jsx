var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');
var Parse = require('parse');
var ParseReact= require('parse-react');



Parse.initialize("tiygzz");
Parse.serverURL = 'http://gzz-tiny-parse-server.herokuapp.com/';
var LinkedStateMixin = require('react/lib/LinkedStateMixin');

var HomePageComponent = React.createClass({
	mixins: [Backbone.React.Component.mixin, ParseReact.Mixin],

	observe: function() {
    return {
      recipes: (new Parse.Query('Recipe'))
    };
  },
	render: function() {
		var homeItems = function(recipe) {
			return (
				<div className="col-md-4 portfolio-item" id={recipe.objectId} key={recipe.objectId}>
          <a href={"#recipe/" + recipe.objectId}>
              <img className="img-responsive" src={recipe.url} alt="" />
          </a>
          <h3>
              <a href={"#recipe/" + recipe.objectId}>{recipe.name}</a>
          </h3>
          <p>{recipe.description}</p>
      </div>
      );

		};
		return (
			<div className="home-page-container">
				<div className="jumbotron">
 					 <h1>Hello, welcome to Recipe Builder!</h1>
  					<p>View Your Recipes or Create a new Recipe</p>
					</div>
					<div className="row">
              {this.data.recipes.map(homeItems.bind(this))}
          </div>
			</div>
		);
	}

});

module.exports = {
	"HomePageComponent": HomePageComponent
};
