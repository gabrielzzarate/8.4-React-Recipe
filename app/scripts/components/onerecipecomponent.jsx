var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var Parse = require('parse');
var ParseReact = require('parse-react');

var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var Parse = require('parse');
var ParseReact = require('parse-react');

Parse.initialize("tiygzz");
Parse.serverURL = 'http://gzz-tiny-parse-server.herokuapp.com/';

var OneRecipeComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      recipe: null
    };
  },

  componentWillMount: function(){
    var query = new Parse.Query("Recipe");
    query.get(this.props.recipe).then(function(recipe){
      this.setState({"recipe": recipe});
    }.bind(this));
  },
  render: function(){
    var recipe = this.state.recipe;
    if(this.state.recipe){
    return(
      <div className="container one-recipe-view-container">
          <div className="row">
              <div className="col-md-12">

                  <h1 className="page-header">{recipe.get("name")}
                      <small>by {recipe.get("userName")}</small>
                  </h1>
              </div>
          </div>

          <div className="row">
              <div className="col-md-8">
                  <img className="img-responsive" src={recipe.get("url")} alt="" />
              </div>
              <div className="col-md-4">
                  <h3>About</h3>
                  <p>{recipe.get("description")}</p>
                  <h3>Project Details</h3>
                  <ul>
                      <li>Lorem Ipsum</li>
                      <li>Dolor Sit Amet</li>
                      <li>Consectetur</li>
                      <li>Adipiscing Elit</li>
                  </ul>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                  <h3 className="page-header">Related Projects</h3>
              </div>
              <div className="col-sm-3 col-xs-6">
                  <a href="#">
                      <img className="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="" />
                  </a>
              </div>
              <div className="col-sm-3 col-xs-6">
                  <a href="#">
                      <img className="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="" />
                  </a>
              </div>
              <div className="col-sm-3 col-xs-6">
                  <a href="#">
                      <img className="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="" />
                  </a>
              </div>
              <div className="col-sm-3 col-xs-6">
                  <a href="#">
                      <img className="img-responsive portfolio-item" src="http://placehold.it/500x300" alt="" />
                  </a>
              </div>
          </div>
          <hr />
      </div>
    );
  } else {
    return(
      <h1>Loading</h1>
    );
  }
}
});

module.exports = {
  OneRecipeComponent: OneRecipeComponent
};
