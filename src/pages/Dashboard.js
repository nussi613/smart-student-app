import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('smartStudentUser');
    if (!user) {
      alert('You must be logged in');
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('smartStudentUser');
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Welcome to the Dashboard</h2>
      <p>You are now logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;

