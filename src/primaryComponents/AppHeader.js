import { Outlet, Link } from "react-router-dom";
import './AppHeader.css';

const AppHeader = (props) => {
    /*
    function renderUsername() {
        if(props.isLoggedIn[0]) {
            return (
                <h2>{props.userInfo[0]}</h2>
            )
        }
    }
    */

    return (
        <>
            <div className="App-header">
                <h1>Athens Restaurant Finder</h1>
                <p id="loginLink"><Link to="/loginpage">Login/Sign Up</Link></p>
            </div>
            <Outlet/>
        </>
    )
};

export default AppHeader;