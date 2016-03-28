//3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');
var Parse = require('parse');

//local
var IndexComponent = require("./components/indexComponent.jsx").IndexComponent;


var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "home": "home",
    "recipe": "recipe",
    "add": "add"
  },
  index: function(){
    console.log('index');
    this.current = "index";
  },
  home: function(){
    this.current = "home";
  },
  recipe: function(){
    console.log('recipe');
    this.current = "recipe";
  },
  add: function(){
    console.log('add');
    this.current = "add";
  }
  });


// var Router = Backbone.Router.extend({
//   routes: {
//     '': 'main',
//     'recipes/' : 'recipe'
//   },

// 	// chat: function(username){


//  //  			ReactDOM.render(
// 	// 		<RecipeApp collection={messages} model={User} />,
// 	// 		$('#app')[0] );


// 	// },

//   main: function() {

// 			ReactDOM.render(
// 			<IndexComponent />,
// 			$('#main-content')[0]
// 		);

//   }

// });


module.exports = new Router();
