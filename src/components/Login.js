import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { UserContext } from '../context/UserContext';
import './sign.css';

function Login() {
  const { loginUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData.username, formData.email);
  };

  return (
    <div className="box">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      {/* Add the Sign Up link */}
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
