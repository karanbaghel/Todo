import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/signup.css';

const Signuppage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const  confirmpassword = formData.get('confirm-password');

    if (password !==  confirmpassword) {
      setErrorMessage('Passwords do not match. Please re-enter.');
      return;
    }

    const data = {
      name,
      email,
      password,
      confirmpassword:  confirmpassword // Ensure field name matches backend schema
    };

    try {
      const response = await axios.post('http://localhost:9000/register', data);

      console.log('User registered:', response.data);
      // Optionally, you can redirect to another page upon successful registration
      // Example: history.push('/dashboard');
      window.location.reload(); // Reloading page after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Failed to register user. Please try again.');
    }
  };

  return (
    <section className="login-section">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="white-box">
          <h4 className="font-weight-bold">Registration Form</h4>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                aria-describedby="emailHelp"
                required
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-success btn-block mt-3">Register Now</button>
            <Link to="/">
              <button type="button" className="btn btn-secondary btn-block mt-3">Login</button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signuppage;
