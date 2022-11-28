import { useHistory } from 'react-router'
import { useEffect } from 'react'

function Register() {
    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()

        const form = e.target
        const user = {
            email: form[0].value,
            email: form[1].value,
        }

        // Creates new user in database
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        }) // fetch
    } // handleRegister

    useEffect(() => {
        fetch("/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            } // headers
        }) // fetch
        .then(res => res.json())
        // Redirect user to login, replace /login with login route
        .then(data => data.isLoggedIn ? history.push("/login"): null)
    }, []) // useEffect

    // Login form that transfers data
    return (
        <form onSubmit={event => handleRegister(event)}>
            <input required type="email"/>
            <input required type="password"/>
            <input type="submit" value="Register"/>
        </form>
    ) // return
} // Register

export default Register;