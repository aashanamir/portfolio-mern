import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { SignInUser } from '../../slice/userSlice';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData, userStatus } = useSelector(state => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignInUser( email, password ));
  };


  useEffect(() => {
    if (userData !==null) {
      navigate('/admin/settings');
    }
  }, [userData, navigate]);

  return (
    <div className="fancy-signin-container">
      <div className="fancy-signin-box">
        <h2 className="fancy-signin-title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="fancy-input-group">
            <label className="fancy-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="fancy-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="fancy-input-group">
            <label className="fancy-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="fancy-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="fancy-signin-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
