//3rd party
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
var forms = require('newforms');

var Parse = require('parse');
Parse.initialize("tiygzz");
Parse.serverURL = 'http://gzz-tiny-parse-server.herokuapp.com/';

//bootstrap react components
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Image = require('react-bootstrap').Image;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

//local
var Ingredient = require('./ingredient.jsx');
var RecipeStep = require('./recipestep.jsx');
var SiteHeader = require('./siteheader.jsx');
var IngredientFormSet = require('../forms.js').IngredientFormSet;


var AddRecipeComponent = React.createClass({
		mixins: [Backbone.React.Component.mixin, LinkedStateMixin],
		getInitialState: function() {
			return {
				name: '',
				username: '',
				cooktemp: '',
				type: '',
				preptime: '',
				cooktime: '',
				steps: [],
				notes: '',
				url: ''


			};
		},

	handleSubmit: function(e){
		e.preventDefault();
		// Simple syntax to create a new subclass of Parse.Object.
		var Recipe = Parse.Object.extend("Recipe");
		var Step = Parse.Object.extend("RecipeSteps");
		var Ingredient = Parse.Object.extend("ingredients");

		//new class instance
		var recipe = new Recipe();
		//sets values to parse dashboard
		recipe.set(this.state);
		recipe.save(null, {
			success: function(recipe){
				alert('New object created with objectId: ' + recipe.id);
			},
			error: function(recipe, error) {
				alert("failed to create new object, with error code: ' + error.message");
			}
		});

		console.log(this.state);

	},
	render: function() {

		// var formset = new IngredientFormSet();
		// var ingredientFormset = formset.forms().map(function(form){
		// 	return (<RenderForm form={form} />);
		// });


		var steps = this.state.steps.map(function(step, index){
			return <RecipeStep step={step} index={index} key={index} />;
		});
		return (
			<Panel header="Add a Recipe" className="new-recipe-container">
				<div className="basic-info-container">
				<form onSubmit={this.handleSubmit}>
					<SiteHeader title={"Basic Info"} />
					<div className="row basic-info-form">
						<div className="col-sm-4">



							<Image src="http://ingridwu.dmmdmcfatter.com/wp-content/uploads/2015/01/placeholder.png" alt="..." />
							<fieldset >
                    <Input type="text" valueLink={this.linkState('url')} id="url" placeholder="Image URL" />
                  </fieldset>
              </div>

						<div className="col-sm-8">

								<div className="recipe-name-group">
									<Input type="text" placeholder="Recipe Name"
										valueLink={this.linkState('name')}/>
									<Input type="text" placeholder="By"
										valueLink={this.linkState('username')}/>


								</div>
						</div>
					</div>
					<div className ="row prep-inputs">
						<div className="col-sm-12">

								<div className="col-sm-3">

								  <Input type="select"  valueLink={this.linkState('type')} placeholder="Recipe Type">
                      <option value="Recipe Type">Recipe Type</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Dessert">Dessert</option>
                      <option value="Appetizer">Appetizer</option>

                    </Input>
								</div>

								<div className="col-sm-3">
										<Input  type="text" placeholder="Prep Time" valueLink={this.linkState('preptime')} addonAfter="mins" />
								</div>
								<div className="col-sm-3">
										<Input type="text" placeholder="Cook Time" valueLink={this.linkState('cooktime')} addonAfter="mins"/>
								</div>
								<div className="col-sm-3">
										<Input type="number" placeholder="Temp" addonAfter="&deg;F" />
								</div>
								<div className="row">

									<RecipeStep index={1} />
								</div>

								<div className="row">
										<div className="col-md-12">
											<SiteHeader title={"Personal Notes"} />
										</div>
										<div className="col-md-10">
											<Input type="textarea" placeholder="Add a note about this recipe" valueLink={this.linkState('notes')} />
										</div>
								</div>

						</div>
						</div>
						<ButtonInput type="submit" value="Save this Recipe!" />
			</form>
			</div>
			</Panel>
		);
	}

});

module.exports = {
	"AddRecipeComponent": AddRecipeComponent
};
