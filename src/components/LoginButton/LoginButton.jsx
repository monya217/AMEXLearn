import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FaUserCircle } from 'react-icons/fa'; // Import the user icon from react-icons

const LoginButton = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 880px)' }); // Define the breakpoint

  return (
    <button className='btn' onClick={() => navigate('/auth')}>
      {isMobile ? <FaUserCircle size={24} /> : 'Login/Sign Up'}
    </button>
  );
};

export default LoginButton;
