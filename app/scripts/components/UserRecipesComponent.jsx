var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');
var ParseReact= require('parse-react');
var Parse = require('parse');
var SiteHeader = require('./siteheader.jsx');


//bootstrap react components
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Image = require('react-bootstrap').Image;
var Table = require('react-bootstrap').Table;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

Parse.initialize("tiygzz");
Parse.serverURL = 'http://gzz-tiny-parse-server.herokuapp.com/';


var UserRecipesComponent = React.createClass({
	mixins: [Backbone.React.Component.mixin, ParseReact.Mixin],



	observe: function(){

		return {
			recipes: (new Parse.Query('Recipe'))

		};

	},


	render: function() {
		var recipeItem = function(recipe){
			console.log(recipe);
			return (
				<div  id={recipe.objectId} key={recipe.objectId} >

          <h1 className="recipe-title"> {recipe.name}</h1>
          <h3 className="recipe-author">by {recipe.username}</h3>
          <img src={recipe.url} />
          <ul>
            <li>Recipe Type: {recipe.type}</li>
            <li>Prep Time: {recipe.preptime} minutes</li>
            <li>Cook Time: {recipe.cooktime} minutes</li>
            <li>Cook Temp:  &deg;</li>
          </ul>
          <Panel header={
            <div>
              <span className="servings">
                 Servings
              </span>

            </div> } >
            <Table striped responsive hover>
              <tbody>


              </tbody>
            </Table>
          </Panel>

          <SiteHeader title="Personal Notes" />
          	<p>{recipe.notes}</p>

        </div>

    );
    };
    return(
      <div className="container home-grid-container">
          <div className="row">
              <div className="col-lg-12">

                  <h1 className="page-header">
                      <small></small>
                  </h1>
              </div>
          </div>
          <div className="row">
              {this.data.recipes.map(recipeItem.bind(this))}
          </div>
        </div>
    );
}
});

	// 	return (
	// 		<div>
	// 				<div className="row">
	// 				<div className="cols-sm-10 col-sm-offset-4 view-recipe-header">
	// 					<h1>title </h1>
	// 					<p >By Username</p>


	// 				</div>
	// 				<div className="col-sm-12">

	// 				</div>
	// 				<div className="row">
	// 				<div className="cols-sm-6  recipe-view-info-container">
	// 					<div className="col-sm-3 info-container">
	// 						<span>Recipe Type</span>
	// 						<h3>Dessert</h3>
	// 					</div>
	// 					<div className="col-sm-3 info-container">
	// 						<span>Prep Time</span>
	// 						<h3>15 min</h3>
	// 					</div>
	// 					<div className="col-sm-3 info-container">
	// 						<span>Cook Time</span>
	// 						<h3>20 min</h3>
	// 					</div>
	// 					<div className="col-sm-3 info-container">
	// 						<span>Cook Temp</span>
	// 						<h3>350 &deg;F</h3>
	// 					</div>
	// 					</div>

	// 				</div>
	// 				<div className="row">

	// 				<Panel header="Serving Size">
	// 					<p>insert ingredients and amounts in table here</p>
	// 				</Panel>
	// 				</div>

	// 				</div>
	// 	</div>





	// 	);
	// }



module.exports = {
	"UserRecipesComponent": UserRecipesComponent
};
