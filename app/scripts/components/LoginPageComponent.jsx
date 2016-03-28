//3rd party
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');
var Parse = require('parse');

Parse.initialize("tiygzz");
Parse.serverURL = 'http://gzz-tiny-parse-server.herokuapp.com/';

//react bootstrap components
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;


var LoginPageComponent = React.createClass({
	componentDidMount: function() {
		$("#sidebar").addClass("hide");
	},
	signUpUser: function(newUser, newPassword){

		var user = new Parse.User();
    user.set({'username': newUser, 'password': newPassword});

    user.signUp(null, {
      'success': function(results){
        console.log("results: ", results);
      },
      'error': function(user, error){
        console.log(user, error);
      }
    });

	},
	loginUser: function(username, password){


    Parse.User
      .logIn(username, password, {
        success: function(user) {
          console.log(user);
           Backbone.history.navigate("home" , {trigger: true});
           $("#sidebar").removeClass("hide");
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
        }
      });

	},
	render: function() {
		return (
        <div className="login-page">

            <div className="row">
              <div className="col-md-6" id="logincontainer">
                <LoginComponent  loginUser={this.loginUser}/>
              </div>
              <div className="col-md-6" id="signupcontainer">
                <SignUpComponent signUpUser={this.signUpUser} />
              </div>
            </div>

        </div>


		);
	}

});


var LoginComponent = React.createClass({
	handleLogin: function(e){
		e.preventDefault();
		var username = $('#inputEmail').val();
		var password = $('#inputPassword').val();
		this.props.loginUser(username, password);
	},


	render: function() {
		return (
			<div className="login-container">

      <form onSubmit={this.handleLogin} className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <Input type="email" id="inputEmail"  placeholder="Email address" required="" autofocus="" />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <Input type="password" id="inputPassword" placeholder="Password" required="" />

        <ButtonInput className="btn btn-lg btn-primary btn-block" type="submit"> Sign in</ButtonInput>
      </form>

    </div>
		);
	}

});

var SignUpComponent = React.createClass({
	handleSignUp: function(e){
		e.preventDefault();
		console.log("signing up!");
		var newUser = $('#newEmail').val();
		var newPassword = $('#newPassword').val();
		this.props.signUpUser(newUser, newPassword);

	},
	render: function() {
		return (
		<div className="signup-container">

      <form onSubmit={this.handleSignUp} className="form-signin">
        <h2 className="form-signin-heading">Please sign up</h2>
        <label htmlFor="newEmail" className="sr-only">Email address</label>
        <Input type="email" id="newEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
        <label htmlFor="newPassword" className="sr-only">Password</label>
        <Input type="password" id="newPassword" className="form-control" placeholder="Password" required="" />

        <ButtonInput className="btn btn-lg btn-success btn-block" type="submit"> Sign up</ButtonInput>
      </form>

    </div>
		);
	}

});

module.exports = {
	"LoginPageComponent": LoginPageComponent
};
