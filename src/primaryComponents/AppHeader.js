import { Outlet, Link } from "react-router-dom";
import './AppHeader.css';

const AppHeader = () => {
    return (
        <>
            <div className="App-header">
                <h1>Athens Restaurant Finder</h1>
                <p>Sign in</p>
                <p><Link to="/cardform">New Card</Link></p>
            </div>
            <Outlet/>
        </>
    )
};

export default AppHeader;