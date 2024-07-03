import React from 'react';
import '../styles/Login.css';
import googleLogo from '../images/google1.png';

function Login() {


  const handleLogin = () => {
    // Logic to handle login
    window.location.href = 'http://localhost/server/public/welcome.php';
  };

  return (
    <div className="fw">
    <div className="registration-form">
      <div className="form-container">
        <h1>Welcome to Early Events</h1>
        <button className="google-login-button " onClick={handleLogin}>
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
          Continue with Google
        </button>
      </div>
      <div className="image-container">
        
      </div>
    </div>
    </div>
  );
}

export default Login;
