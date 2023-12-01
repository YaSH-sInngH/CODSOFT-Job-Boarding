// login.js

import React, { useState } from 'react';
import './login.css'
import Navbar from './navbar';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <>
      <Navbar/>
        <div className='container-login'>
            <form>
                <h2>Login</h2>
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password:</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="button" onClick={handleLogin}>
                Login
                </button>
            </form>
        </div>
    </>
  );
};

export default Login;
