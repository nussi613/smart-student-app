import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('smartStudentUser'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleGoToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h2>Welcome to Smart Student App</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span onClick={handleGoToSignup} style={{ color: '#0077cc', cursor: 'pointer' }}>
          Sign up here
        </span>
      </p>
    </div>
  );
}

export default Login;

