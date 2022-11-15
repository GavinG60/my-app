import React from 'react';
import './Userforms.css';

function Signup() {
    return (
        <form>
            <h3 clasName="title">Sign-up</h3>
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
            <button type="submit" className="button-login">Sign-up</button>
            <p>
                Already registered? <a className="form-password" href="#">Login-Here!</a>
            </p>
        </form>
    );
}

export default Signups;