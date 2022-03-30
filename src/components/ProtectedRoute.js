import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
   
   return true ? children : <Navigate to="/abs" />;
   
};

export default ProtectedRoute;
