import React, { useState } from 'react';
import '../style/loginpage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Log the email and password to the console
        console.log('Email:', email);
        console.log('Password:', password);

        try {
            const response = await axios.post('http://localhost:9000/login', {
                email,
                password
            });

            console.log('Login response:', response.data);

            if (response.status === 200) {
                // Redirect to dashboard or next page upon successful login
                window.location.href = 'http://localhost:3000/homepage';
            } else {
                setErrorMessage('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Failed to login. Please try again.');
        }
    };

    return (
        <section className="login-section">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="white-box">
                    <h4 className="font-weight-bold">Login</h4>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success btn-block mt-3">Submit</button>
                        <Link to="/signup">
                            <button type="button" className="btn btn-secondary btn-block mt-3">Sign Up</button>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Loginpage;
