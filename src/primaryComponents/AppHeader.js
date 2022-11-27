import { Outlet, Link } from "react-router-dom";
import './AppHeader.css';

const AppHeader = (props) => {
    return (
        <>
            <div className="App-header">
                <h1>Athens Restaurant Finder</h1>
                <p id="loginLink"><Link id="XDDDD" to="/loginpage">Login/Sign Up</Link></p>
            </div>
            <Outlet/>
        </>
    )
};

export default AppHeader;