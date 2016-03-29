//3rd party
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');

//local
var LoginPageComponent = require("./LoginPageComponent.jsx").LoginPageComponent;
var HomePageComponent = require("./HomePageComponent.jsx").HomePageComponent;
var UserRecipesComponent = require("./UserRecipesComponent.jsx").UserRecipesComponent;
var AddRecipeComponent = require("./AddRecipeComponent.jsx").AddRecipeComponent;
var OneRecipeComponent = require("./onerecipecomponent.jsx").OneRecipeComponent;

var Parse = require('parse');
Parse.initialize("tiygzz");
Parse.serverURL = 'http://gzz-tiny-parse-server.herokuapp.com/';
var LinkedStateMixin = require('react/lib/LinkedStateMixin');



///main component holding nav, sidebar, main content components

var IndexComponent = React.createClass({
    mixins: [Backbone.React.Component.mixin, LinkedStateMixin],
	getInitialState: function(){
    return {
      router: this.props.router
    };
  },
  componentWillMount: function(){
    this.callback = (function(){
      this.forceUpdate();
    }).bind(this);
    this.state.router.on('route', this.callback);
   },

   componentWillUnmount: function(){
    this.state.router.off('route', this.callback);
  },

	render: function() {
        var user = Parse.User.current();
		return (
			<div>
			<div className="container">
				<div className="row">
					<NavBarComponent />
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<SideBarComponent />
					</div>
					<div className="col-sm-9 main-content-component">
						<MainContentComponent router={this.state.router}/>
					</div>
				</div>
			</div>
			</div>
		);
	}

});

var NavBarComponent = React.createClass({



	render: function() {
        var currentUser = Parse.User.current().get('username');
        console.log(currentUser);
		return (
			<div id="wrapper">

        {/*  Navigation */}
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#home">Recipe Builder</a>

            </div>
            {/* Top Menu Items */}
            <ul className="nav navbar-right top-nav">


                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i><span> {currentUser} </span><b className="caret"></b></a>
                    <ul className="dropdown-menu">

                        <li>
                            <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>

        </nav>
      </div>
		);
	}

});

var SideBarComponent = React.createClass({


	render: function() {
		return (
				<div id="sidebar">

        {/*<!-- Sidebar --> */}
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">

                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#recipe">Your Recipes</a>
                </li>
                <li>
                    <a  href="#add">Add a New Recipe</a>
                </li>


            </ul>
            {/* <!-- /#sidebar-wrapper --> */}
        </div>
      </div>




		);
	}

});

var MainContentComponent = React.createClass({
	getInitialState: function(){
  return {
    router: this.props.router
    };
  },
	render: function(){
    console.log(this.state.router.current);
    var body;
    if(this.state.router.current == "index"){
        body = <LoginPageComponent />;
        return body;
    }
    if(this.state.router.current == "home"){
        body = <HomePageComponent />;
        return body;
    } {/*
    if(this.state.router.current == "recipe"){
      body = <UserRecipesComponent />;
      return body;
    } */}
    if(this.state.router.current == "recipe"){
      body = <OneRecipeComponent recipe={this.state.router.id}/>;
      return body;
    }
    if(this.state.router.current == "add"){
      body = <AddRecipeComponent />;
      return body;
    }
    return(
      <div id="page-content-wrapper">
        {body}
      </div>
    );
}
});


module.exports = {
	"IndexComponent": IndexComponent
};
