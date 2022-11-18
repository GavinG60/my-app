import React from 'react';
import './UserForms.css';

function Login() {
    return (
        <form>
            <h3 clasName="title">Login</h3>
            <div className="form-comp">
                <div>
                    <label>Email</label>
                </div>
                <input type="email" className="form-input" placeholder="Enter your email"/>
            </div>
            <div className="form-comp">
                <div>
                    <label>Password</label>
                </div>
                <input type="password" className="form-input" placeholder="Enter your password" />
            </div>
            <button type="submit" className="button-login">Login</button>
            <p>
                New user? <a className="form-password" href="#">Sign-up!</a>
            </p>
        </form>
    );
}

export default Login;