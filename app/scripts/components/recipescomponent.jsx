	 <div className="row">
      <div className="col-md-6 col-md-offset-2 recipe-app-container">
        <div className="col-md-12 recipe-header">
          <div className="col-md-12 serving-container">
            <div className="row">
              <span className="servings-heading">Makes</span>
              <input type="text" className="form-control serving-input"></input>
              <span className="servings-heading">Servings</span>
              <form className="radio-inputs">
                <input type="radio" name="US" />
                <span className="radio-label">US</span>
                <input type="radio" name="Metric" />
                <span className="radio-label">Metric</span>
                <button className="btn btn default adjust-button" id="adjust-recipe">Adjust Recipe</button>
              </form>

            </div>
            <div className="recipe-alert row">
              <p>Build recipe adjustment alert here</p>
            </div>
          </div>

        </div>
        <div className="col-md-12 recipe-content">
          <div className="row">
          <div className="col-md-6">
            <ul className="ingredient-list">
              <li> <input type="checkbox" name="ingredient-item"/><span className="ingredient-amount">2 pounds </span>skinless, boneless chicken breast halves, cubed</li>
              <li> <input type="checkbox" name="ingredient-item"/><span className="ingredient-amount">2 cups</span></li>
              <li> <input type="checkbox" name="ingredient-item"/><span className="ingredient-amount">2 cups</span></li>
              <li> <input type="checkbox" name="ingredient-item"/><span className="ingredient-amount">1 cup</span></li>
              <li> <input type="checkbox" name="ingredient-item"/><span className="ingredient-amount">2/3 cup</span></li>
              <li> <input type="checkbox" name="ingredient-item"/><span className="ingredient-amount">2/3 cup</span></li>
              <li> <input type="checkbox" name="ingredient-item"/><span className="ingredient-amount">2/3 cup</span></li>
            </ul>
          </div>

           <div className="col-md-6">
            <ul className="ingredient-list">
              <li> <input type="checkbox" name="ingredient-item"/></li>
              <li> <input type="checkbox" name="ingredient-item"/></li>
              <li> <input type="checkbox" name="ingredient-item"/></li>
              <li> <input type="checkbox" name="ingredient-item"/></li>
              <li> <input type="checkbox" name="ingredient-item"/></li>
              <li> <input type="checkbox" name="ingredient-item"/></li>
              <li> <input type="checkbox" name="ingredient-item"/></li>
            </ul>
          </div>

        </div>


      </div>
      </div>
      </div>
