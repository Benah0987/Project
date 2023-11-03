import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { UserContext } from '../context/UserContext';
import './sign.css';

function SignUp() {
  const { signupUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: '', // Set a default avatar URL
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(formData);
  };

  return (
    <div className="box">
      <h1>Sign Up</h1>
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
        <div>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Avatar:
            <input type="text" name="avatar" value={formData.password} onChange={handleInputChange} />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {/* Add the Login link */}
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUp;
