import Cardgrid from './Cardgrid.js';
import './AppBody.css';

const AppBody = (props) => {
    return (
        <div className="App-body">
          <Cardgrid currentRestaurant={props.currentRestaurant} isLoggedIn={props.isLoggedIn} />
        </div>
    )
};

export default AppBody;