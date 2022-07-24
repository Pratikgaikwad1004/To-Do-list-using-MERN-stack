import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <>
      <form className="login-form" method="POST">
        <div className="login-container">
          <div className="login-email login-div">
            <label htmlFor="login-email-input">Email</label>
            <br />
            <input
              type="email"
              name="login-email-name"
              id="login-email-input"
            />
          </div>
          <div className="login-email login-div">
            <label htmlFor="login-email-input">Name</label>
            <br />
            <input
              type="textbox"
              name="login-name-name"
              id="login-email-input"
            />
          </div>
          <div className="login-password login-div">
            <label htmlFor="login-password-input">Password</label>
            <br />
            <input
              type="textbox"
              name="login-password-name"
              id="login-password-input"
            />
          </div>
          <div className="login-password login-div">
            <label htmlFor="login-password-input">Confirm Password</label>
            <br />
            <input
              type="textbox"
              name="login-password-name"
              id="login-password-input"
            />
          </div>
          <div className="login-button login-div">
            <span><Link to="/login" className="create-acc-btn">Login</Link></span><br /><br />
            <button className="login-btn">Signup</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
