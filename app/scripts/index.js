//3rd party
window.jQuery = $ = require('jquery');
var Parse = require('parse');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
var bootstrap = require('bootstrap-sass/assets/javascripts/bootstrap.js');


var router = require('./router.js');
var IndexComponent = require("./components/indexComponent.jsx").IndexComponent;

$(function(){
	Backbone.history.start();

	ReactDOM.render(
    React.createElement(IndexComponent, {
      router: router
    }),
    document.getElementById('main-content')
    );

});


