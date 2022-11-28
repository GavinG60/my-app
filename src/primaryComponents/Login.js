import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'

function Login() {
    const history = useHistory()

    // Grabs inputs
    function handleLogin(e) {
        e.preventDefault()

        const form = e.target;
        const user = {
            username: form[0].value,
            password: form[1].value
        } // user

        // Sets token recieved from the backend
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        }) // fetch
        // Sets token so it stays after refreshing page
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.token)
        }) // then
    } // handleLogin

    // Confirm if the user is logged in by verifying token
    useEffect(() => {
        fetch("/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token")
            } // headers
        }) // fetch
        .then(res => res.json())
        // Redirect user to homepage, replace / with home route
        .then(data => data.isLoggedIn ? history.push("/"): null)
    }, []) // useEffect

    // Login form that transfers data
    return (
        <form onSubmit={event => handleLogin(event)}>
            <input required type="email"/>
            <input required type="password"/>
            <input type="submit" value="Submit"/>
        </form>
    ) // return
} // Login

export default Login;