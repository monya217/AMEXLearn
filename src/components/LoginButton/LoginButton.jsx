import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button className='btn' onClick={() => navigate('/auth')}>Login/Sign Up</button>
  );
};

export default LoginButton;