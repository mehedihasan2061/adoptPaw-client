import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
//, allowedRoles 
const PrivateRoute = ({ children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  
console.log(user);
  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-bars loading-lg"> loading...</span>
      </div>
    );
  }
  // && !allowedRoles.includes(user?.role)
  // {
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }
   if (user) return children;
   return <Navigate to="/login" state={location.pathname} replace="true" />;


};


export default PrivateRoute;
