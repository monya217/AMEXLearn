import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

const PrivateRoute = ({ children }) => {
  const authUser = useAuthStore(state => state.user);

  if (!authUser) {
    // Redirect to login page if not authenticated
    return <Navigate to="/auth" />;
  }

  // Render children (protected component) if authenticated
  return children;
};

export default PrivateRoute;
