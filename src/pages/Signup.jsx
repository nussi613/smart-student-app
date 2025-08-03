import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { email, password };
    localStorage.setItem('smartStudentUser', JSON.stringify(user));
    alert('Signup successful!');
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form className="login-form" onSubmit={handleSignup}>
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
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <span
          onClick={() => navigate('/')}
          style={{ color: '#0077cc', cursor: 'pointer' }}
        >
          Login here
        </span>
      </p>
    </div>
  );
}

export default Signup;

