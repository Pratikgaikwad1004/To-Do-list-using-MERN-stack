import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup(props) {
  const [credentials, setCredentials] = useState({email: "", name: "", password: ""});
  let history = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    console.log(json)
    history('/login');
    props.showAlert("Account created successfully", "success")
    
  }
  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <>
      <form className="login-form" method="POST" onSubmit={submitForm}>
        <div className="login-container">
          <div className="login-email login-div">
            <label htmlFor="login-email-input">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="login-email-input"
            />
          </div>
          <div className="login-email login-div">
            <label htmlFor="login-email-input">Name</label>
            <br />
            <input
              type="textbox"
              name="name"
              onChange={onChange}
              value={credentials.name}
              id="login-email-input"
            />
          </div>
          <div className="login-password login-div">
            <label htmlFor="login-password-input">Password</label>
            <br />
            <input
              type="password"
              name="password"
              onChange={onChange}
              value={credentials.password}
              id="login-password-input"
            />
          </div>
          <div className="login-password login-div">
            <label htmlFor="login-password-input">Confirm Password</label>
            <br />
            <input
              type="password"
              name="cpassword"
              onChange={onChange}
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
