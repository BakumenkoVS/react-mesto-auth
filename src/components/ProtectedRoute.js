import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
   return children.props.loggedIn ? children : <Navigate to="/sign-in" />;
};
