var React = require('react');
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;

var Ingredient = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-sm-2">
          <Input type="number" placeholder="Amount" />
        </div>
        <div className="col-sm-3">
          <Input type="select" placeholder="Unit">
            <option value="Unit">Unit</option>
            <option value="tsp">teaspoon</option>
            <option value="Tbsp">tablespoon</option>
            <option value="Cup">cup</option>


          </Input>
        </div>
        <div className="col-sm-5">
          <Input type="text" placeholder="Ingredient" />
        </div>
        <div className="col-sm-2">
          <ButtonInput value="Add" onClick={this.handleSubmit} block />
        </div>
      </div>
    );
  }
});

module.exports = Ingredient;
