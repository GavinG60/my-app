import Cardgrid from './Cardgrid.js';
import './AppBody.css';

const AppBody = (props) => {
    return (
        <div className="App-body">

        <div className="Filters">
          <p>Filters</p>
        </div>

        <div className="Change-components">
          <a href="#" id="button1">Add/Remove Components</a>
        </div>

        <div className="select" id="prices">
          <select name="standard-select" id="price-select">
            <option value="">--Select a price range--</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </div>

        <div className="select" id="food">
          <select name="standard-select" id="food-select">
            <option value="">--Select a food type--</option>
            <option value="Mexican">Mexican</option>
            <option value="Italian">Italian</option>
            <option value="Indian">Indian</option>
            <option value="Greek">Greek</option>
            <option value="Chinese">Chinese</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="refresh">
          <a href="#">
            <img src="refresh.png" alt="refresh image" id="refresh-pic"></img>
          </a>
        </div>
        
        <Cardgrid/>

      </div>
    )
};

export default AppBody;