import React from 'react';
import './LoginPage.css';
import { useState } from 'react';


function LoginPage(props) {
    // state and functions for login/logout
    const [loggedIn, setLoggedIn] = useState(props.isLoggedIn[0]);
    const logIn = (event) => {
        event.preventDefault()
        let loginSuccessful = props.login()
        //alert(loginSuccessful)
        if (loginSuccessful) {
            setLoggedIn(true)
        } else {
            alert("Invalid credentials")
        }
    }
    function logout() {
        setLoggedIn(false)
        props.logout()
    }

    // state and functions for signup
    const [signupMode, setSignupMode] = useState(false)
    const signUp = (event) => {
        event.preventDefault()
        props.addUser()
        alert("You have registered successfully!")
        setSignupMode(false)
    }
    function goToSignup() {
        setSignupMode(true)
    }
    function goToLogin() {
        setSignupMode(false)
    }

    if (loggedIn) {
        return (
            <div className="credentialsDiv">
                <h2>Signed in as: {props.userInfo[0]}</h2>
                <button onClick={logout}>Logout</button>
            </div>
        );
    } else {
        if (!signupMode) {
            return (
                <div className="credentialsDiv">
                <form onSubmit={logIn}>
                    <h3 className="title">Log In</h3>
                    <div className="form-comp">
                        <div>
                            <label>Email</label>
                        </div>
                        <input type="email" className="form-input" placeholder="Enter your email" id='emailInput'/>
                    </div>
                    <div className="form-comp">
                        <div>
                            <label>Password</label>
                        </div>
                        <input type="password" className="form-input" placeholder="Enter your password" id='passwordInput'/>
                    </div>
                    <button type="submit" className="button-login">Login</button>
                    
                </form>
                <p>
                        New user?
                        <br/>
                        <button onClick={goToSignup}>Sign Up</button>
                    </p>
                </div>
            );
        } else {
            return (
                <div className="credentialsDiv">  
                <form onSubmit={signUp}>
                    <h3 className="title">Sign Up</h3>
                    <div className="form-comp">
                        <div>
                            <label>Email</label>
                        </div>
                        <input type="email" className="form-input" placeholder="Enter your email" id='emailInput'/>
                    </div>
                    <div className="form-comp">
                        <div>
                            <label>Password</label>
                        </div>
                        <input type="password" className="form-input" placeholder="Enter your password" id='passwordInput'/>
                    </div>
                    <button type="submit" className="button-login">Sign Up</button>
                    
                </form>
                <p>
                        Already have an account?
                        <br/>
                        <button onClick={goToLogin}>Sign In</button>
                    </p>
                </div>
            );
        }
            
    }
}


export default LoginPage;