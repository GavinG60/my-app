import Cardgrid from './Cardgrid.js';
import './AppBody.css';

const AppBody = (props) => {
    return (
        <div className="App-body">
          <Cardgrid cardInfo={props.cardInfo} isLoggedIn={props.isLoggedIn} detailedViewIndex={props.detailedViewIndex}/>
        </div>
    )
};

export default AppBody;