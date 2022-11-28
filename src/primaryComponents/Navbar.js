// Dynamically rendering navbar, can restructure to route to logged in homescreen
import { useHistory, Link } from 'react-router'
import { useEffect, useEffect } from 'react'

function Navbar() {
    const history = useHistory()
    const [username, setUsername] = useState(null)

    async function logout() {
        localStorage.removeItem("token")
        await history.push("/login")
    } // logout

    // Ensures user is logged in
    useEffect(() => {
        fetch("/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            } // headers
        })
        .then(res => res.json())
        .then(data => data.isLoggedIn ? setUsername(data.username): null)
    }, []) // useEffect

    // Render login/logout buttons based on if username is set
    return (
        <div>
            <Link to="/home">Home</Link>
            {username
                ? <div>
                    <Link to={"/u/" + username}>Profile</Link>
                    <div onClick={logout}>Logout</div>
                  </div>
                : <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </div>
            }
        </div>
    ) // return
} // Navbar

export default Navbar;