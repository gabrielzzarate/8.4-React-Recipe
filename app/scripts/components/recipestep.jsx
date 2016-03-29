var React = require('react');
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var LinkedStateMixin = require('react/lib/LinkedStateMixin');


var Ingredient = require('./ingredient.jsx');
var SiteHeader = require('./siteheader.jsx');





var RecipeStep = React.createClass({
	mixins: [LinkedStateMixin],

	getInitialState: function() {
		return {
			ingredients: [],
			directions: ''
		};
	},


	handleSubmit: function(){

	},
	render: function() {

		return (
			<div className="col-sm-12">
							<SiteHeader title={"Step " + this.props.index}/>
							<Ingredient />

					<div className="row">
						<div className="col-sm-10">

							<Input placeholder="What directions go with the Step?" type="textarea" valueLink={this.linkState('directions')} />
						</div>
						</div>
						<div className="row">
						<div className="col-sm-12">
							<ButtonInput value="Add another step" onClick={this.handleSubmit} />
						</div>
					</div>
				</div>

		);
	}

});

module.exports= RecipeStep;
