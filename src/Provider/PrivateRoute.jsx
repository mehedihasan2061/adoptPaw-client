import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
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

  if (!loading && user && !allowedRoles.includes(user?.role)) {
  
      return <Navigate to="/login" state={{ from: location }} />;
  }
    return children;


};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

PrivateRoute.defaultProps = {
  allowedRoles: ["user", "admin"], // default allows both roles
};

export default PrivateRoute;
